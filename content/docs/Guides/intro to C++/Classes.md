---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W535NY7X%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYb8P8mY7wNmUiJlsvTpih%2Bboy28eriW14sgo0fs73zgIhANcK4R%2FYeqi7WhoBYN3Jav9XCCu1K3HxAk2I5NvI%2BInjKv8DCDQQABoMNjM3NDIzMTgzODA1Igy0CPth3bKo48ew%2BHEq3AM9YBrYoPqRCrq%2BEC7gd2wVP7mDLOAgrkQEgQWc%2BcYfZ2MFUsSpI%2BOHDEGwzsJMfRxQHsP7jUoN9h7%2Bqm25xXiA8Vcu6pFgXMiWJaSxSYnxuU6jt4QIqADq5qtaPFy1gdEsoQiCBH4VnBzJxTJ97yucSCNf%2Fx%2F9IqU2HXaN4Fzwe444tEvtdnpURmnJHwdWasKOdzamIBhqoH7i87c684u7ncIZsL%2Fs79R5r0qmIrLQfQFTGJTB1O%2BVCoD%2FW4uyUdYdI6jS1tEa4QSrRQVV24y2963GGuiuOP8GH5U3ZAU4EO6rTSod1dU6VW18JNUf2gzEONbhqvncVIXsq9xeQ0Yj3sMixWuttVhXPI9ecg2E0S%2BN57XSDT4fd4VZe%2BMLdmvJuFqKkxZOIlG0xjZppZ8q3knKhJMgY1BfwoyXx5nNTSUF6CY0pYF4H9kYBuMi52ZpauTrQ5VLLGQ%2FnKlHOPB9TsDS3JAS3EmPSMsn0083cK0rMV7NwUrqi3NzgQLz%2BDJ0oGyabfOOVMr%2By3K7CfOEydTW7mCCzJjELnOmi8HhlI1JaeHjjO9c7g4y%2BCY0gweUB0JY0Pkk5zO2e0lC6iaMe7c9iSu0DmRfQDYsUN1Pix%2FOREgsmhKVP7AUwzCe1vq%2FBjqkAZkWjF7Y%2FH0wVEES4ENLCToI%2BULcnVRE0h2o5spI%2FandIzxTMeioMw0STk2rHGqMcKobo5smkKqL7BtfnIjuBP9U9TqXKsgLet6MvJbqV%2F6N4OXRGosP%2FKvHHaj%2FstcqXHWMEy1HMHJ21QGSSO0uDiTW8bKtI%2BEy0MKWs9pnyFBQcTSp5YaZiHrA%2BXkg3G6U6cQZDVNApDtK3mhuF2NHgls4HESZ&X-Amz-Signature=e87a9828ee45641a10305c3d9096b5dfa2e4d70cc83ec22327536b7cc56705ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
