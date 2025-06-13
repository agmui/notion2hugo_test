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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSWOVFW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGO1pTO5QgPlSA2OBqCrz9JCs0ZzIJTG2c6j%2BHMo46cpAiBn3iPCjUPpEDyO9J74sLDSJdixBTOX3Ggilw06aqighir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMy3Wpy0af70I3aNzGKtwDdjC9ncPhmXHHu5%2FENcp6XY8iBmwfF3q3baHcptYI7Dlk6tIgAu2%2FuD11PRxlM1Chm7M7fBu695FogMzsoG7Q5vNOs0XWItpjcuBjqUQMAB23rZdhb8dGhdkoRtWwVrDgLBGVFVKWqE4jy%2FJF43LZq9pSHwifcU4zSXNJlqfW1MAegA011O9BzABuU%2BF36SZUU3y%2FGwMb%2F5enQLjP%2BGTGHqFKFbHMUuIc9VUdDBrXvrEaC7qtnepk5urrBr3roeKAAg3QvugBmiM6y5t0gup40xzY3oIcz%2FoHQ%2FHBzkwRiWB4zOWDc2F7EjZgA%2Fjg680RybVq92UdRk1hD3sUVWHW1Vg%2FCp7%2BG9RAliz7j5ztqU%2FdFSRsmioJ5nPpuHsurbNf1BR9lbaX3iUTVFpGmLefVqrvoqgAKiqhpZ6xYAQZw13hwIXU8BuLhs8KwSz1BWJHuPo6s9pbnAGdy3tar4%2Fwe6Io%2BAlsOy022VCkvlCNUsTkMBxlaU%2FkJ6Gz5f25EtKhopld%2BjifZEsw2KCvQUUiu3yYOqZFjE0zDxyyleY5pRhLRTKxfeYS0udNqiOF5UthJIdI0FJOEl%2B%2BlL6on%2B8ZzWVdEV19gX%2B%2BKYypHMMbGPzvNvM9T%2Foj0XiZ5xEw6ZKywgY6pgHUQqYFPKFOVtnlNsIqILmDk6RlPiCMaXHtlD%2BV2RUfz%2BiMaWRKGFFX2RJQKtOnsXcpzl8W6PMuojkFSNIvPdJCFxk7dEIBkzoFLdQc22ZEDh%2BUdMuKwo53uPyjw7%2FHexbW8z0e6G56rl0MN5S810thCF8GiuI1tHmyLmLO5eQ5ArQwT3XcqmpqV%2BGYMF7KtWKhiWMmI3B%2B%2BFUVrHOWNB85NmhNFZP9&X-Amz-Signature=9484dfda8a640f31cb71fa8731845c358485d38f055e4bea6489e485885508da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
