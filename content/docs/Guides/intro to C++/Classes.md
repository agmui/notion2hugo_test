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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ4WP7MC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDvVXZGZj4dZoQwvzv2yPDyoPdSmzO6o2QT2m187IqZAiEAmvmnOx%2B7PMTu62TIlZHXdaY%2BlOHo7oYvnNigXZAUm5gqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFsLND%2BuHyjo79PqCrcA%2BIWRtRnAVwIbYAinOCBEOBcr9Wic%2Bnbb9HITtU7Z6%2FWAb1nwkk5pgjNgC%2B9AOIWuUPmnfFWGybhCDiRxDFPqVKovXoKSX0eZmFPUf63YLmBpW%2Buw6NVJKkPft6gng2QklSb%2FhYBQSkG%2BH1TrYWAWX34qvv%2FkjFmjweiCR4m1YXsxoZpvTcMOO4ZeHa2GsYiQOGp6AbasZyrGW81HrjDuCnG6NNZGPcbCZ5cmcObLTWpy%2F8y5VQm0XrLFhYorvzxo5r03GYKUeswoo%2FA0hURpr4ECgc6Z5y0PqZvpwYThUSHGs3lEHXKEp2fRXSBlB4Rm4dge1uFU96r%2FRWdkB7YlAFDqLmuwm9S6CmlVNQXm2vTAtntSe9ZoEbuNWtOdboZgvPSLRgA2Fts4U4HS27O7w7k8%2FXN2pVX2mXfo3KHx4qb%2BlgGbtOcfceESpg9a%2Fx9Ts3IjuU%2FTkMkEeY%2BWCVhzDbVrxcthjoMcl7kbJcLH8L7GF9Xlt1TP7KVrp9cyEk2lRLdUUumpVSDfQQbAMXJYAz8uuO%2B6x1KMqDeAz%2F90wF3cm0g7StLdY%2FCP3CJUh%2FY2T6bOSteqx39QlT87p77zfggsGz08Q14UTGSl9CADE%2BFocLBsT75%2BSmFBwPwMMiI%2BMAGOqUBKA%2BEGgdfPqEmAMCQQ5mpvujOW1UAkjufXQBgYJVeQ4Ysqxs4FuwjIijZ4G3zCeeDnsrupFgvOAJfbJZr9tU0MrKnHb9baQlLY%2FVUjzeJuwEj%2FERm4Z336AcAQZSwVkBvCjUtITeV9Dv%2FXDI%2BL0yvBJ6FQHQOmZ1i2gYNG7vxyMUwZ%2FDXE1ZXRgj263vvDl2%2B0tHWKSgGB8XxoSP2XT5sfuGBIeBa&X-Amz-Signature=9b6147531cae217956393a52f6abc1cbcf5e4319a68cf9e04fc03b8434a4b131&X-Amz-SignedHeaders=host&x-id=GetObject)

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
