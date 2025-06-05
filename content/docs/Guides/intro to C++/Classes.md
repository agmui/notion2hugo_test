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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUI3BS4K%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIBGwYJNinemglKeZQXHbnPkvOAwPjzBueUB2jsufG8iWAiBnYeDe1dgK%2BbwQe%2FpQIg1GG8btDiqM1AtfDcLuqWI4oir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMml15VYpAuZsD9FCxKtwDBIaBxuZSXwdJgsW2Arj7W%2BXmROv3Y%2Fsyv3%2BuBvjYgQ9RK3e%2BxiKcvbs9PU2yKMabVY6miZoIVzKefPNxOoGhIoFIrmK9tHe98hADn6LB6ekVmurA%2BsY4hMg8f6UmQaYIzYnHyVEQZSrSS8Ug%2B7McUxu4LxN2%2BZv3T9f8LTvx%2FXh1AWjNYbHGHcueqjuQ2wmpAchcI7XT6QUpFjMJJrmo5o50%2FLM2dVWBgfT6yqZQgwlG31GfCFCS018Qmqr9g5b5W4BgUuxSEfkItGJREQDhifuzEK%2BwHQWe%2B7sxMfmU9SbKQuswIc27ZQGweiGW16hvRhhOKukKbGr0Gn5CB9i4rWkKpya7oD2y%2FKenkvEFnUEhhqROqDnuKmWXZkML%2B%2BUv%2F2oL1FBcMlmEK89kATSjWWjmNx9tDjRcvOHojjMJlFZ08HR5a5LfFCriDRILx%2BhF9KK7ViS1N%2FkImw3h9ozAkPGDLeKoOv2l7XwLGsiG11%2F3BUZ%2Fkt2TNtR%2FRAZGs51ZfT%2FHMlbOriYu056LTHfmikU1dUp8vmAT%2F9VebI4MNol2sl%2F0uvnrX4BEc4KmjrN%2Bh6So17LPwAX2K39fTfMQMG8DcdDOdwU6zhoYKexqdaclmdNyrHpSjWcdxlYw4YmEwgY6pgHDigLqz2613CNhhxImN4Mdu6yutTLqUSC6tzVo526HVH1AiYLLORAMyePKGNnOFff2PPfLHrMFFnvZb17PMUrXhcj2g0aFe%2Fk9lFSPNRevLe3e7Nx4oKGqf8ELpMFVO0VL%2BADwSqnKgoi2rJ2qE8z3Xh91dkJiD%2B%2FdeNNPMmY16TuJIJosl2fD3JGt4wk6KoUUye0C8%2Bk9dv4t0dbzDNCYUpbIOqtN&X-Amz-Signature=dac802999482adde09679307a5d180b51cfac58b86cf48603f10b5e769217419&X-Amz-SignedHeaders=host&x-id=GetObject)

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
