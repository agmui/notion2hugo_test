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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNPZDHKD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCYhhxoRqf8dHH0HPpc42j3bjNHdEak0KGsBPDhb6UYqwIgek3Op%2BjWmFYZNXXM%2B0JRcvh941A5coRM7TOgZ%2F6lrm8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXahgNOsYHZJOJjoSrcA3BDuE4MIAipc9bso4NEJokb48UoCfbt5uI7%2FZhpvc6%2F%2FhDIa%2FxkFw1IxIojQNEWg0fn%2BkmLa11KpQ%2FStbz5D4lqmTNxAWHeOpQRjT%2FSbRj6yKMNED18%2BmZv%2B%2FlVSCD0X%2BnAXS7mvg%2Fj8F6WkKLDU7jieHyEuFJ9VFdcIhvhsZJ46%2BYPzV%2FjS7yFR%2B3FcMs5JhGRTB7sFKaqlFyjYh1BBw1fUk47PuTdsZO%2BDCpA7y5b3%2FqxQ5QPLqHHimAsYlvVcpI9Iwz2JCCrGPu3meFpOiflOQdShXqeTR4d9KnIXy9Wybamde20gapsbszbNtZGSjfXWHFb4kHo2GQCy11TKgJHDtVTVyqcWIHqAXN8u1WkX%2FFgDgjdXoEWqGHjK1jHPPJWoLNTrhBXdmMl70AANyamExzdR7ntWC1XWvASsmDqc5QD%2F0P%2BcCcl2gKAOau66jLUIUvujBXXpV05AQlCBaxhZC7QaJo4WwuyDrnFQqx453yz%2BKecaaPuSjyXjN4%2FE2cnb6g16qYzZ8XXi4zBTjclYORdNQdUqXSxzzUzHFY2q2nIj8Hf6ic7vEO9IXdRlJQu3V84e%2Fa6HQ0ag8v3sRzSdBDr7G1qiALEyujapIvffhHA330MS2GXBZ6lMLDXuMEGOqUBtHN5LT5tQqEr8ZjG9XJnbWjq3fuFMS1fX7EdvPAUDCPCZGX51i6YG%2FGKlVaZu1pOV4rPK%2FMky2YhDZo8u9ODojGOaKVscSvUbWYrSOsXJT2HVi9wa%2BOpvHCX6LkmJXC9vbLjkH6ZcNLzaIl7ZR13gZ%2BOLI3auTYPX7tcfYIgxLkL8Yruet67d1VobANsfRvspM2Tqr23C850qNlGYv6EJ8xFBNZN&X-Amz-Signature=fdecbc1d69ff99fe5617a8e75007dd4aa55d9fe741b6b97c37997556cfa47804&X-Amz-SignedHeaders=host&x-id=GetObject)

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
