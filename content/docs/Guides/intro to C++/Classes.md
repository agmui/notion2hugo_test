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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XF2C35P%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDThY1lQJSXR9xOahjetscksigWq0JKuKhCK96fYPyPogIhAN0dAtgTNN1DuRvRxVCJqGp6kOa6fdAsyAFDLfWbd5DmKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR5xTnba%2BmNtinE%2Fwq3ANuK%2BOXRwOtwiJRId1d5g%2FIRlpoWKq4HlK8%2BpjSS%2FCL7%2ByOmrnU0cu53bx4wTtwPeAcAqWwF3%2BoDSnR2Hi%2BnVChGm05UeYylrvlBJGNryWeQ34aRQmRT3zrkuuC%2B4Oi7x%2Bescm9t5uKNAXm5YlvpNxaL2cSwzuZnKGYMmkXokqmHXRIfKgBLuq9BBIjc2kaYVx0aG9CHxSU34Jpi8CbaLPybNZbxM74Qgafw%2FHhMA8rwasKuOAFqyRGQ1GAEn49YUR12Oxo8lkQ1b11y%2FTCT0DZuw6Tkp4kJxqG1xMgMYGZEhLdL%2FYx%2FWSXMiyRqkRqToxhYAEf4KR69ztZTOVrFn8s2yf4lKeERs24kG5P9e%2F5QKW62EKGq4%2BIAIRT1cgcdsZXo63X9TVuqym4XGOPQYtyogYDpDWs2eB2QnzhcpYuXZ%2FdkizFAUgp1J05RCRRQdlD5rB3N3ETN%2B8b1Tgw%2BndcB6U9bb%2FcVUL2R7n90ZJnjduJrHsb1Hea0hdtWgwcNuTt5rA2rGjCp9%2FkYnuuZugKOr9fvYcSf%2BvP2YUehq88cwDaL2oKg2nqNIb%2B612w%2Bt%2FgsBm1pEAY6NaWgCXCbFz84yjqBKGivjEVHX0Jsx2i1ScjYXEWex4SGwGc%2FjD9m5rCBjqkAUbKKm03MR1sExE4XMI%2FSIe%2FCVnLLgF0XoLzfxJ%2FLD6fYfQlF%2FGNt0DuBRLu2uvrslW5O3zbfxuCPClx2lD9JCxU3%2BUa7br01UGj4hXv0Jt6Va0QgilRO9gzFSbZmQG8qTa%2FRjbwYTeY0%2BjbUn2Q42t8hE2cxtQ06BhrdYdopeT6AbFoN0QB%2BMO7FB6uoYjejJ3FiYqBppj6nUq27HbqWGmGym1O&X-Amz-Signature=aad8dfd7f7ce6d802e4c94bda3efe6b6d3fb2b0903d8bcb868b0920f4a166c81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
