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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEVRBK5K%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkObPV8qW5shNOUMg1K5sT68E98u5D2SfCnlzAWeBueQIhAL9B77TQ8ff3HTKNRgs7kIVBAikRBrZZdpyzUu8X5zZDKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkRJ%2FaGOwg6zqolGkq3APwuO7TLMYmix%2F39MeB%2BvMUOMsT8%2BZoeoT%2BYV7oijak2sgBsIwdJ28s5nzmwYZZ24HpWfm02WsNhsxjYvR2hpxM%2BLNHqinmS8Oz7epQq8Ma6OfYxJeLAc6%2BWXMBjdQbXweOC2jsLMZxFxYA%2F9daKIt3HDbvvyI7KeKjfgr0rw0qvpkg6U6YS%2FCq58iIzgClVRDgvef5KQEc5Nr1Jqbtv3PETXmNE9YkVU1D%2FvFY5poPvx8eXlk4rEqY6lCoHg0LdUS7kQllrCZEcCE7HEFCQBdsYxj642LraIbLWdG1dFUx%2BztJNd4Rhi%2Fn%2F8KZRLe2MXVInWACZbc0MistO0I2xURPKntzLq1RULHHmkPucGqPTR4CQU9%2BKjsyWhz4VcqWK8rc0LplE16sdkPgf7Ycp8naVjAwAssjVUIYs4ylxD0NEop6HC4y7Ahxw1SVs3d6g3b4%2BKI2JuvwHyggpyoGBHOvdAC2xea6qTUolzQVP7rDX%2F7jhFvQJ%2F37rsF3Z0TjD6paGZSTkD53wrcdQNVAfBSAcIDwBsLjKRYmo6CbMO9nl4XnYxGvKS6jVNVkgKtene%2FLWY8caXrBzUbcQKzpmQYTvBe20kvRKkQm%2BnTMI4pmXitQ5hPoESsUdNed2jDao4HLBjqkATAknYCD8elTuMGduB2Zvy2QKHfiDGIG%2BsGlB5%2B8%2FGELnCthNsXpHL8ysE%2F6D0Xs7qG48aBdaH6%2BfCsgzNnhOv7J2wLxYEPko9PUWmj4%2BEg%2FGFTKHHIy1xPZenaZEg5P%2BgkN9Sr1WpX6pkBgTH3xxaugtjrnNBUQ6UyCdJumvfoceh6DeKs%2FGx7BMA273XDZg9UttU9yBS3IvCgkC%2FP%2BzJKE5FOr&X-Amz-Signature=a9dcdbc69105bc33d773c0fd7e71e3f560433b4ccef8a7153e4cbeee0d62f112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
