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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQWAFZF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkm1G0miJgdqY%2FDurycKR4Gs4YAo0W5BumTd5sG9fNiAIgeq1dPIII08BmztlnafS0z%2BjwbyNKLJWNfpLSxsM%2FXCMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7UfEbjrYe06IEnKSrcA4%2BksvDBZmG0FF538jUf3tYbL8CQhFHnWQlxtuQIuPiWQxrA%2FEuG07YEklSxkqclwPRuJ5%2FMf2hGNgwxPCtrdTBOn44hlTMFxvfZ%2BH4suEVqpb1L%2Bzx2xap6%2FGHkeVrU%2FNi5PjnvAeUNZe66faOaJjw2Ec6BI2%2BiLXaFHdM0x16Ae1hD1RgL1wiUdk7eSdkZRMKMZTMrzzH1RkwCcR5B1%2F4iqZF439fuTtzsNvdHS3%2FcGEyDVkHy%2FQdW9wJcfUt80FaUyJKJJjlun9sOOC%2B7b6nenqXkfigHpXy7yoqFhUkWNvJM%2Blb4v%2Flym%2FinZUQ9YkJgQBLZ%2BXTcRBS85q%2BgxJ4WkwzxubL%2FviJ6nDSPofrjI7JLMYRJmmti%2B9SzIbxmqeTBLpK%2FwENnHgAlK7661iWqTcaU8GEM1Wr5eVol88MzwPn0H2kLMBZTPyC%2FLd5uqY6DC3KghDV5ddGJwSz9Sq7DeTTLq1r4BmMOdiWT49vuReaS52pRAthIRsZxEHimYTkOY2eh1QpBK5WV%2Br2Zi9qwnnHggPvzi9gJAxBViVvkC0cOi1wiEaTFIGN2F5jTQF9mYWGv4MHzBnwicyP%2Fwo3Ux1e4jM3HSBt52SrKsppYH8bSI5r95FtAmfvTMIi908IGOqUBn%2FrcrZ%2FAw6rALhH1fMq%2BVY5iq9XjOgFK9SKYXN160Ya%2F7wdYh9u2LoFQYYnMziO8spN4n4oCQEfGQqHA%2B3Wi0goXajzkTR%2BhExzprFSjGI%2BzmP36jb41CFQje%2FOtdb%2FFHsaC3iTH1IG98YUF4OhdH%2BVbJBHFwMGS8VU5HFUqg%2BS11gzFKRGra0S3s%2F8JcK6ShL8XwrvAQZVTkKCjZWR6trNHgj25&X-Amz-Signature=e8e87544108f4a1c8e0799df48d2187d953ae0e2b980f082631161c83938f2e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
