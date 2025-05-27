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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647IYOMUV%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC36g93eVxXDW2EbWbcXaMvBwFEip5zlrIq%2Ffof5ojAXwIgL7tEcrkzcqG%2FkFJj9PTBU1SOwpi8kyGVHvKTEn3TlbYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJY%2BdWdx%2BJ6zpg6ECSrcA1J4BSYo9K6a791zPxe5iyBWpRmACX9d46U28e6W7JA1WZpnFVlSCcih%2BWXB14Sg5MAikUMrZaOy6KD%2Fmzi8IGEENDQK%2BW4YnWUlnKsy0ynUX9mY1ZnQ8EJD1x07GiAj43EIPJ4JJT7VyQKAr5ygydT9lQ6b7PvKwZcBwuvASwq5UvbLJgIAGvHHCmJTP%2BJnr3w8r5IjRDQEp9ZXFn1cFYwHws2YfkH6MS8Fgk89mkZAkcS0jh0qtgSX%2BfRLslAnkS2aC2KAhwYiSqmnf49%2BYaWCQDsDdFr9KXTFxdS9u9JKFIwrahR0HI4llG6Si76a%2Fb7GPPhDXKFPqXyh%2Frl6sPAhwPyJHszJ%2BSh%2F1lHNP%2FyqbcFlAeKQ1tGtj5qKcerzm5%2BVZCyOdsgafhEOwvhmqzMTRZmjPiFBHYadx%2BuQFGnUoDI%2B6Ufu6e6%2F%2F60MT7nZpuUUX8YGRcYCPLdUpfoaM0WncEk024VnttSciH7EtziIlen9y7eiTIa2BnmgyOkYvI%2F4gzZIvliGqC78kAFAYsteIQiIoL%2BLgE1wsSc3ibgXGp8cIZPrG5w3q6M3d8PaiHo7wkpNFXeA130OkKhFnw8asFlTE9vESB2yDsmc9pOGKm74XCGSDsOTNmMBMP%2F32MEGOqUBqW0e%2ButAimFCF8Yg5vqDY6122TrmMCE5cssaGOmLVQhXw6ujPem51P6bIMHkK6TVdX1qhL5kHkDUMWYvGBkd5aPX%2BQWdAYUy179Rt2nq7g0J66%2B7keJp5PMKygNlbw4uF%2B9COdIOxA%2Fct65mY0oEQYcT6JoD0gOzu4390fpZ4VFi%2BD7zNwg%2F0RyhB7666gZghSNSJGsqxXRn3UyRcOvRoueGyTLG&X-Amz-Signature=31d115656a5313427717d0f4b68497a50dfbdf21e91786c0466e9046effa691a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
