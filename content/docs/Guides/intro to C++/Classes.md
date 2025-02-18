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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KDZM2MP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICK22EOqtOKYvlONFgRo72GTSR39g4wXrvIci%2BTutBc0AiAeFKN%2B1tSLl3Fo24Fk%2FTk8V3W9%2BfD4AMMl5SCifLrA4iqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOEI9Xd1qtGCc4tg0KtwDKh4YaBPT2wp%2FRgrSt4TMtXnn%2BJ4kh7x9t16bFwvIxxB4Q7LoD%2FejQqydj3%2B%2B%2Bj7gSHD%2F254tm75aABGcx3%2BM0dYI%2FZXEcxe71fFTWZ45TdfPDjubzB8cGY6Px3KGAKN9DP4T7xY8DhnNQTOBZjmKDxt1vq44YDrnqoLkJmLAqvm8I9az5p%2BVZdTL63w4RQsbgInQM%2Bac5c9gySJ%2BGV%2BbfvRJQOqnI6wMu8GyZws2wZmFpS1EWndWoCRX5eJ3MpMHFB0kzyWuoUPvj5nopktfjc9Qju78hVZ%2FLxfT8o7IAJ3XB88gCUJDVaVUd3H0viWktLGoi53WeJNVJojtBR68AMi0v5YK2WclK6%2FQEuXv1j8jCzYnFEElENvKUttADBVi%2BVhMBbwX5cHQT20vTHlmfyvGFki%2BoTOMvEqGCRrTK6j8eE1opuL3RaoslyQPvNCLpjlOJ8LGrNLL4crmcIhDBTcXC7q2REWnFFUyUESTAPNTTIa%2FQvbiBAR9%2ByjJCfM89qsifY3MygVIiKbzvLto2d6zHfiyvDd9PmR%2Bx8Fth5jnS6k%2Fb969pZctOWXZnga%2BahrhO0Twnp6fhHbUDFqtAE8a4lm%2F1LOzO%2BvxnFYfIdEv3D52NTfU%2BSe5PTAwzrnTvQY6pgExKRkindt%2BaXJsmRqBD7JYbNYdeY2Ef9yd7f0Rmi2OoM7sLnDdvYFcqvNp3Lehy2a8rNSmXzq%2B%2FEwcP1vUONs5PZJojUsVJh1Hc%2BjmM8AQsxs1Q9ZnQaCpG4VspwIRU5Ly5yuOCP8%2FXmq%2FgZagOTUS3Vt3wL7ai%2BZ8flnUbRWde4BzKElKVGOpHlwSlJ86yShRJvUVqNJ7MpnImTmgWcmVrI3yuvvr&X-Amz-Signature=eab29719fd823e9823f8ccb4290a61f013f2642621bba57dcbe49b100336070e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
