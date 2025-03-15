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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHJ5IA5X%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA%2FRg%2BZpxHLcT4moooKYWxCt8D7JQolpzBvC0uf8fXhgIhAImzfWENSf7yW6Q4Ag6Z1YpWXHEp%2FdO1nhPsqID8NQ%2BVKv8DCBoQABoMNjM3NDIzMTgzODA1IgxCzk7oO8tf1wuZHMYq3AP5efK7mtPPIHo2%2FO7XmVQ5Yg7%2F43RwZWnwXBaZPl%2Fz1ujrITH4pRG939hJjfL1miGP7mfs%2FpHoa8%2F6cwkTmO0C4gAMfDAUCPiINxrl5G3UC3MbcaXS99aycTyT5osibVsMs2Clh08yA3T0WkElzcpcUa4SMztAeCZpGwg0TeP5ZGvNHF6sLROZlBITFFQidMwSHC7qU7VXl6HVz9aPpzTn4%2Bi1onMpVXXjEodYHbablmlaMGCfZ1cFymj44P01xvIQb%2BbQxuHl%2BnVSz64VBtHsrPyzk0ORexSZGyNNnteOtWmtFYLRMNLGs%2FWCbF2aagjviYQ7Q5jqR%2FqVLdHJIiUofKOkVLmtoi5vUeIvp0wUwTr%2FWW0%2FuZ7a7a2ugPP2MYx8j%2B%2FOSEKnphgUyxjf0ljEXDpEv5p4QejhK%2BNBG170SL6rW%2FdUcaQJSDmZKbvOskxn2i2X0KvIOkuz9WKqAGIFEjNfUkkriUJ7V9tlzBkaN5E%2BOjDT41ZRvsXPWE3YFkrNMMy2gh48kUC7TFA8pIj3OQaIUrFm92a%2F9ggUZ1vtFo6cfGA2zf8uNvy6k8Oc%2BvM48GaGDmr%2BhBYT%2FhLWmsB4M9TY%2BIv5YqmCLy5fK2rt6ECVCPVMmT%2BS9KjJsjDA69a%2BBjqkAS0q7NmepDx7%2BlglFwUoxbHszKuMUfE8iuwryS78AZctVWZbP8%2BsxdVjrRuIy6kxMrhOniwhv%2Bl38GdE7OZ8gzH0P59hXeSC6hVVEgIZbOoG32B2FVd9DnW1mpklvtkmvIXwJQg3e7j0H9tZcn3feQmtn69wWiOqCLWS8Ka%2FdGRUhMeC68h%2F2X6n%2BMEMWsryamM%2BxDEZlukr5NBGrdbWc%2FKDq9ww&X-Amz-Signature=45660dca75183ef6f9be06ab7eb74e36e32e7a928712a6684e0eb67e99961005&X-Amz-SignedHeaders=host&x-id=GetObject)

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
