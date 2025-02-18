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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJXKQLKK%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCa0ayzbZzaZsvkHQhkZyWkt4YXNj6pWQIqcOZWhKEsUQIgHmJmjtgFrZ1pLZ9FMBVagZLsOVu%2FfOwMMkAoczgFVTkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiMNf0%2Bpa4nts3qjCrcA2i3gGKUp5EBmFQ4HEV4IwyhmET2xbbiUAW7zc%2BsNvBoujDwZ%2FIW1JgtIkQGF1xb%2BnjfbdJzWwNWdNumfJD9s%2FH%2BQqk73PhVgoEacPr%2BKza47A2ELwUDeLhAeZGRYCnznVR1oqzqASeDVHTE2%2BizaQK0IuEubChi1Yn2oXE0zZOV46AC8PRxhyseC83f1laLodZ7LPYMnRrTeBKPWYGbhCJ17T5fXvoqVLh5UJqagOSzKdJRBDhAZy1cZbUNMKQe3n18gR4lgrRNU31EezTMXX94ClqRI8vzLbDE34QMFCSq28kRf7H%2FMOUZ4T%2Bw5NPb4jdfRpH7hm1osDqqy0VmF1xMEwvdlSO85tSPuoWS9eDHiw8sDVyPkXLleE4lK1tS95%2FSN0rrzzW0%2BQR8nGaYpc8VXPyfLALRKdorogpJm40HYk2yx7BM6zwuvpwogdhCJGVuPZ6GHr4iNbBaf0xAhzqLlhjphcjqSrU7ziG%2BHkZb8ss8G0O%2FKd7N8O%2FsBdKMyPp3L2wlVETax3Nau2x9PbbJxBpfq%2BIZpcj2Kqzma9kbbm1r10D30miQIxX8aIWn31AkpWCJfadW0C%2Bm%2FjyTsRw74v2jxtr9r9LRO3oy62hsvdczxnTy6YLuJ%2F9vMNia070GOqUBu1YK8yBdhOOmsM2NZcPPNnOLRcAQYjwIh0gazKTHQ6gVnx4n9%2BwTjXBM8Lv%2B69ts5%2F80iPdP59zq6eWLJU6%2BWRux62T3u0GTam2Ssmv9QIsyMWbKVuTZUQP3mAqp8ORUVP38RJACvsQN7ttm09oggO2uydjAhPTziijN9WxL6TFb3MEtVc2xuLdqIqgZGWK85VEMvNlpfhMFKDP2xGiEuNqBTcN8&X-Amz-Signature=609daa22f7a7498766203f2296ca4ccfc98d63df8be40ad6bbd41f5af3134757&X-Amz-SignedHeaders=host&x-id=GetObject)

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
