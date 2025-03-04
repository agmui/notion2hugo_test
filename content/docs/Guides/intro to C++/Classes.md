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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VONIIRDU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FuyR0ltCzowqZlkyOIdkZZYVhGJvkj%2BXum%2Br%2BKBzPqAIgIhhXYrWN5vv00iGUdoNC4aVoVTyuxZAz8BCVSHm1H6oqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4GwEY2fXji23oYhCrcAx8D6l%2BapR1XWk%2B6f%2BfYjdqjs6jFCWAWXUKfzvfwZfj5j8llJMwZWjDSV8nTJOIjiO4aeAPU8qsz77TmVFssONk8mK1HisfB%2F3AVhs%2BbtcqMUfuNFGq4HBk%2BQ0q%2FrLQRH4oi2tPf8XffGM03xXGcUHi1j7LdmXLnBRR7gHjApb9qld5L7VTSaEQK8%2BtBVw%2BcDGVv4mlg8MAEc6bJgBWoHHdyb0xsUyuuMhwbXLf1UEr%2Fy96Gg2majli5AyxcnV%2BAxlzTROnhmwVYrIqe7%2Fh1fQM2KIjYKFwGF1yJS1GYruErRqNTSS%2FEc85G50YbLYCyYLlBbhuXWsvOmrHetKO%2B8wioX9Zgu%2FQIQI9HqQZV8D4MW6vgZt7YjHVQaYFHG91Qx2L8cTI0WtmOluh4JJ78R2BS0u9S24Jcq1YAPqbiwZkBHvXAiZrpR%2FHSTz0nBK0oMjgrBj9PzppQ3hfLLafbZHKLmmzK7HW3iGwiOouxo%2FeP8QKo9qY6y7AD4jGchfXK%2BEacApidp%2B2Xf27sAogy2rVKC86XVduS9RGEVuIT22EAzG5oPQ224P9KTlJUVKr6DUYT3qxA6Kc7nZOT8voU%2BcfvK1%2F367cm4BoEdaz2wXf5ZgY39p7%2FSjAekS%2BuMJ2Em74GOqUBFtRPEzy5W42esmtc3fiA9ZU5IFnAkCvFfCSzW0yTlzh1Lr3qd41lnvKCet69XAXRwgMIaTIiuAfBoHcnAu6BCyOQ88o1S%2BDcymL03ZCh4LdhS8ccjtbsmBaDuaRW9sNXZOQXZk2cQ6%2BdMndTiWQmpVv8SzfHHFH2Wdw3CbxFP5SHA24mQsgoEjABS3jqG0LgkZMJQr4lNSUGp5ZS335Zm7g%2BxV8Q&X-Amz-Signature=3e99e4872201ac1abbdd89bc7455c4efe15ff2abe229b4befd2241f58a9b9212&X-Amz-SignedHeaders=host&x-id=GetObject)

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
