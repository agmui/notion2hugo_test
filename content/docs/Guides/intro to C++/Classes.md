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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JB73V6M%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCGDl79Hsob1XHBEPaimjdnNGqLLKbAcBc7XhmB2jv1AiByFV5COH18dUx4xxvobesCfsrve0%2FGN2FQMm9BBSc%2Bqyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMHJCzA1bmPpf6g3DRKtwDOqsnrFWogYwzIOFGKNluNnqLSDaLI%2FRZ0JRRqlUuWjSL%2Be1ImT3w%2Fl46ef0YkcJvDTTlFD4QobFzkYVhVfKMyImdNBZzjQz42h1RmncMIgh9YMo%2BMrytzLKK5mlDD7AxZ1wOuV4a%2B%2BmU3F0SZR3JctJOsfUf5aUNPJBQshOzCP%2BmSnY9owz%2FCsC6d%2FtqEokqvCa3zBt0oi1uKp%2B2jjjWo2qaGC3ibbqBOBURpbZ%2FRtUsPwLbJSFO6AUslIbgQAJGSZROyV%2FujJtUAxpeS%2FCy1yLQcAnKys56aeOxv%2FuTFAvc%2BF55UgttmEYg8KsF9ueuvJ703OL5BxR78pyHs0t8z0svxO%2F76Ft6eSs7AFTmpjzHwRKSoKstqdLR%2Ffo3djZ4NHddn521DVNGQJEH0Iku8yl01ZqzAbJPARFuVgSPpNiGK3ElbWzpgtkb9qB8tCP2DtzldViM9Q683ddUzDXw7V0Kd2m05Le2ldeo%2BaW2o1SLLAnnylPD7AT1pQ4c7XsrfxoN37dXB02JrCUXqiZqGqAyHG5Rbvj%2BrnG8Y9efnN3O8Y%2Fk54rzn1av3PtWWIiMZ3x1rsuMjvbEVfMbB%2BdCKPBu8nUkBLTvxHV55mg1X7OqxdK0ApwRq34jV4wwxdb6vwY6pgHtQ99T4FgKPhBVnoZKr6xX2zUEvgmqJ%2FT9PIPzCjJFjuMmk0efEGXxYetYQXVNYNLa%2Bpggo%2FhNFD9EgrzE6MJ6BP1KHXqOpAlwLbM9L8Pe8%2FCohqAzoyTdzY1e52bAKBDsw42aN7WxeXPTR7GJk1ilsuwg%2FgvRLclGOdbOku6p7vrUElPjORVoA6wFHkhsvRM2slQc%2FNrKywrBeueMIxW453VkNe11&X-Amz-Signature=a7c62a9c7a9aeb6f163b738dc5530957676ff10ae197f671200af4b83f97a865&X-Amz-SignedHeaders=host&x-id=GetObject)

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
