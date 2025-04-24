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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUCPL3B%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfxfLHSKjc%2BmxEJN0wlloa%2B4QdleN70SHq33BSi3Vi%2FAiEA4MAo0bNYcBmCA4iHUYCx2aBusB4I4GCRXPUlfvG%2B9sYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDCcJaNWPaW%2FoEuMAZircA2%2FVEW2oxeaCV%2FnoIi4lRHAEH%2F0CllJXN2RjozrP8Z8yNcBN8Mj6bri%2Bcp7soqh0u3nU3ozbSc2dGuCVSFUmA9ejgTHiIVatCl0u9ihra6Zt3lMEK2q%2B0a8q1lf90XOSWquqRUgGM%2BVGfy3TwbAynqsgTyZICph6wbGmjw5FBpY4%2BrZqcst7DnXs9vE%2BLCG8hlHyUGbmq41%2FefV6EKR7OUq7sKIBNwlwi3C3h2ngRoTCKV%2BT%2F9h%2BsvObCfVEW%2BiHsjbpiU3wC5qNIkDHyvwfdPwHbBmNAmBajOMA%2FCxbdPYi27Ugfvu5upEmPLzVHTGoKdnBye49FzezknkiEpggUTlPJUm6WRxeFA0sVY7CyDuJiR2YbETFzSgCNYibN4ynI%2BMmaX1bw7h%2BsgInW499j5YY%2BTM4oXsFZ4FQbtlt3rPPKFx%2Fm6c87QeoWf%2BiLC4AiICLZb1lFuPnhQXbkFHW%2Bz9Gg6vWz4z5sz6OQiU9sxiT4FfY%2F%2Bk1HazdVuf%2BN%2FcFdASPmXXXH%2FTXdS%2BqL62BcGHXDZU74z%2FXT%2FWokZl6%2FbebPOvz7ThZoN7NGYQtKmKEyaEE6oLrCE3hFrrAKw5gLzLG5GsBKgW2cCX8aMqdUL4AAh3gjD%2FWD3yi7UoXMLC6qcAGOqUBUbeXaJNXJNiZJ%2B22CTBMfizg9GiSMvECPHAiTjh%2Bva8tDYan7UhuBz9K6A%2FnninNrLiipkgZ%2FS4RlFg6ZyZwWB%2BNEzXUaSoXIxBMjYbya61ejf3tx7r%2FLDE4JxBPwzNc%2BC3cwHB5%2FiKmA1ycR2oOTlR%2BbYYN7oSo9iNurkj6iJuLNF4flgfl%2BceWfCTpMqBAhIX9qwJiAhPPB2lBSZg716RfI3qn&X-Amz-Signature=29802f6263be409fb577c9435794f6a10341a3f0a7fb2536c47401ac0da6894c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
