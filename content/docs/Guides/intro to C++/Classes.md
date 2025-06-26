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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH3I7PZW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICU5yiQESa4Ll89M6qGeDhvjFblhrlgHyYWp6Ey%2FmX9lAiA6BULVunRwxnZDsi%2BpuZZEauLAOA6OuRUmW3At%2F2VUIir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM4vLlFKxpQJgWPChgKtwDxW2w3Nl32RPgvsnOOvTkuGP1ebqmHZkVy6XiY8SpUl7Rw%2Fzo%2FSl6ziwpbznriVq0iAnmD5SwEw8r%2BH3OQWs8XMijdPAQCpl5N6jweuAQI2drtXH0GGsPrQArssKvzDtwkx5JeUmG5y98Cxb1T5kUQfNknkb120AJwPl6OAcWjCUjolHMVlxhjyvSwUWpt5ZeYAVhF3adyKdoyTboG5Llb%2Fv1nnO%2BNpN1cakrFQlpu8gWyQt6h7fmLArtV9qYn%2Bgh0BlFhWgoLiJyV%2FWzLpEZDDse07BKRHF4kJ2EGh17hoHYmPT5FHkicenPHQwK4IK%2BoFPON1eAS%2FviI6m3N2UvLKlb5tayesVx38hN%2FxNKtXqN1OtIYtDwUTHFm8ZGnAWw%2Br90uU3V%2Fy6zNQ%2FtVe6afFX2dHdQBXA1RO%2BImdQB%2F1%2Fb2admbmZ0%2FCK7i1Sk24eJlvMxg3AxZ9oM3MoOq%2BIzdUetKCoFu4RyJGpHa8ai8oY0s8%2BSU2c%2Fgi9pWhi31dGZrouKP8c1JX6fDLwpG7GaOvhUUVuwxSEIN%2B5D%2FksVayV1%2FbQi8kCS1PugsGfFqIaCo%2FD0wqzmOPoi2bS%2FIY9EmH2rbTekDLJWzq0UhrofT%2B34s1L3OL4gwgIb3N8wzJ31wgY6pgG5Eo3LN%2BV2gM8J4%2FagJ4dcedLIWaeaTegCCfPSusr65w1jZiHWUIiYID7sv1CLt4DKpTlklXq64QD9bMoEyaYv7uIAtKS49AeX4YWbHAfjYiDhsCTFE%2BInetiQ4zrdrX8ybaMXyGtf9Hozjz%2BaH3Sz1kL%2FB9Rvv%2Bdv9iyWPpKjxVKlmnqKrvrINFa6KKyf1nzlTJD7%2BYRVd16zn082D5bU7%2Fz9DJcq&X-Amz-Signature=9783c4881ce1c6fc0da1510ed71d808fb65e8c1460f61cffcdf52e524a6755c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
