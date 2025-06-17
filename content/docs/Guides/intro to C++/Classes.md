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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245QOWWX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOpLTiRIYKvWoRTJykld0K%2FHasr8Ls4xCHf2Z%2Bps5XbAIhAI4T0aOfbGJM1XjH%2FoeFzcTQ%2BLMoK%2BnrujKWqniu4KhUKv8DCG0QABoMNjM3NDIzMTgzODA1IgxZl6p0Qw2vEppgXlUq3APEGe1f%2Fg2GLbNaCOTB93slRLFMyQDS9bdoIYCPipYf8LPd4U5nuBlYvDkYH1RjbidEZN1K4zNsW5Ht0T%2Fv%2BtstnFG95lsFudKK1gIoCdFiYbl%2BEa998bGgaOJuYXcNcZZxnXAlOkXsTayla6bqr%2FCfoYWqQNDt7hYZe17mLYQ6cCuwpGp6OsJKJSPomXkPZZj9WwLOmozRB7woMMdWHzFnscKOKWZUo4kJkhyxBi3LOc4rzY0UwYZ7vI0xXhxBX0h8EhCEN6yMcRHrb9nLEv8k8vMe5aah6rBnWnEkBXO2AKEaQsCxGKigLv9jr855IZc6IGXGPU1Rd2hCfOWL0TvVha5h%2BIFx100zFSjqItT%2FHf9YrS2IKDExE%2F8dgy0s45i6lZLF6Js3djza8iUEsKGvBsoETo1nvmPrWIwaBLGalv%2FagjWNPrs75yZTzOvyEys%2Bq1hFR5yqKRaQMVyydQEcNTo2PyGomfnBIQtXg%2FMeND%2BNebxsvDGSdokST%2BHX%2F5M5v81EYzO%2Bf%2FVllQ7T2d9zlxXfD0dUyctqmNcnuYR%2Bi4t6osgpF356ze%2F6v8Lo55H8t6RVL4g3VdzNeXd%2FL6ty9ISsy5AhD1ZKVe4Z3%2Fag2PW3X14aGZzKxf4S4jDNwcPCBjqkAYGj4lQQeQPc0sBYeO55LmpZSV%2F7Vw35rjNcbdVs8zpzA1CbvGdSNMKIatkEDa5avjH0qzuGY%2Fl3jZsIlCEZqasRRdsFWEdud6OrPp2es0VqIbI9E3NVR5ZH7O3m%2F%2F11ja4mqGQ0A7Js%2FI%2FxtxA%2F1yBhe4lgLtMYeboWlQvumGFmsr3fdjyuHozpt3i5iLXU%2Fq%2Bs4uZJBiBUKtP2xocaFHVR%2Bqlw&X-Amz-Signature=c1ea52e73ff0cdbc6a90998d571d9101744372674dc3a038ad1af5e31728d467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
