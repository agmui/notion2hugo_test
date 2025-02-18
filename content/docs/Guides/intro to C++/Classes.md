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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4RB23WD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCID6bJ3%2Bh5F5rqv5RMdNs2lWCmKXmg5OGolkVAxJ%2B8D1SAiEA5N5VzVVc9LVMkISodQBJNGtv%2BmsNUOP3Q4KUZhOgewUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElWuI9hItnt420VyircA2bI5VQUmjSD7CuukH1hs775j5wZEz1gvWQkchJqCafa%2Fo8G0VW7%2FFQisxXAkPOz3UWA2hy4sEd%2BchCPnDqt9nZOM3bgU3TqojsnbbatxWG6iQB%2FxQ6HgF2hN5FCa7lxUaGqR8J7zQNBNKTYX%2Fy0OQ7W1r0B1n8F0Jk%2Bwmj8kXLlSV6A7ojPPV7Lj4uTF7NdSQNnz8YS0ygW6hQDoYMF%2B88l%2B0dLJeIXVUZBX6OMaW0zBbG%2Bi%2BFUFjhm%2FH9%2BfkHiXPOnaY6gWRQVmAML3%2BSIWDzP8c11fIXcoSGLneGNwAI9F8O3zUHP24k4C8dS%2FY6PNN9V3Yv8YXM21es5t6w%2FZzP97m27oRdYRfbpoB3zPm%2B8POCh%2BoIPoBiy0Ff58bv3IFcl0ke%2FL5jtsoUIk%2Fy40Mg960JaFzkhB8jmx3GzZTO5nw0i0b7804TfCxKDF%2FDm2qbrIc0%2BuvhEmc4aPkn0fMm4cegXm6TxL4i4bCRmDK6pzgrbAZ2B4bx2xMfB8ijqslnXqQxNXHAB1XPG6Y%2BJTMpBaA5dUUnbJr96jRdra%2BjkuhqSaYk6%2Bhhv3GGTVsqreXv7R1W%2FVV856yNE2d0mziD%2F5l81lXjyVdbwLhID9tMxi7tGXKfBtLx4QHJKMKr%2B0L0GOqUBNwDnE6LUsOKBFK90OdNqYf41RgzwaazJHmCTZFUOk6IAB1tWxJ42L5MtkMlpX%2BunJGkoG2TSpcKNZmEfSbg9iEDqWHAcxXXGqCoLauXd3fcQTWOaYhAtKnNvrMoIzDRL4xDF4rBNmTWDa1HOMYpEvlyRnn%2FUPHTOwCAZoz2BjJUt7AwfaiaCwGmVk0YCfzC63ukZcHgx2xzcTP1DVeCNMcoxZCgH&X-Amz-Signature=c2d3b8db0f7d5a617353d76ec47ad055b5a94c791de333ba0e1ef7e63bf1b0d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
