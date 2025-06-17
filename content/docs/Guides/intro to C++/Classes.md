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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HON6OTY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWAwBKXIA5sk7B7YTObkk7TiBikg6s7Jj1n%2FEvsmllgIgYOZJwFTQmjTV9pc8RXRhwEIzXEipKX6wfd57NGmb4AUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJ2CgxmMfq2k1%2Fr8HCrcA5y1h%2BBaUuOmy6Wh34cUN%2FD2Y3rSMyPupy57n6kTQIF%2F01Se4bVlpvvl5VOQDPG9FzwYL2X5YIxyZ9pdJudwJ6tFY65tC1SvBcKjYYIEaBoaJ2QteqS47am3XTo08J8ZVOORCwAVrLwo8vYiINzw4ciI53B%2FcCoOP64NyWX3ZNps2eJhy9gwmF7DNdM8cCI3xf%2BhvycbNU9Pi%2FbM3U9X0HHNVsw5h%2FeZdk2zKyeJgsqcH7i7%2BnH9wwXolQtC49NLSqC94Mu%2BFqe9I4NI8%2BesKZk2JosmKUX%2FNAQTqrsJR0abYYCLEqrTTIh07TyJOlmTX4xSBQcyRzxY9wiEu8%2BJ2k%2FRpK0QHk2ljTcnqrGaIn%2BLTHmqMgZ9StPmgh8KNuS8129r2j7Au%2BNGlzlxNN8RQbHtfgxTN%2FoQa4FW9u9Sh5I4HiJ76NjceM2V%2FDAt5geMLCSh2GB5hTsSaI8WycZkxuR2aTZbnnvKq8Y%2B11CzyT4oxgqcBb8nNknCI2L21MKRkXajZLAaMRxTFESlcwgdXYYslWZyg38P7SNCZZzKV%2FMQQp62BnZ9%2Bd90QsQ1ejwGi%2FxSl4oxIpW6lTz0yPCg%2BgqWdi3H%2BxrbmCHHRTqgSpLEOfIYM2Mma8PPtGP%2BMP6Ix8IGOqUBJS0MHs505WsQa2pveU0PZUx5zYb%2BcpK8ovqnrF0VF1AMjVRU%2BlCYuAO0Wz0UslWTJbUd%2BU2LRBpXhG4nCi2F4VrcKtPbZmFVUGjvyGTy1gkfhacnsHj4vnYxHWhiv3CYWYRRDrN6JvvpF9H6aaodfBflp1za9QzjVeIaPyraVwN9ZHtJX70s9hbmRqj3nqBx%2FYt3p2SGJRAhymSvcujpbNvXQgIw&X-Amz-Signature=a94780cb0a6bba0ef4630f4dedfd61003c31abf9fe048d98b37675908a7f1083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
