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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO5VMJLX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJMAVMJ3VbiLcRxj4w%2FXgI%2BV6xuq6zaYFsDJqfvDE9MAIhAJA2zrscK1W2cy3VLZsiD7ThhqDV%2FXYKI8J0v27lJpndKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxihqFqYTpLo13KJ90q3AOcffCRzfQU5tERtvZq6iccMPU%2FviD2oXXF3lX4BOPmTHTtcRuZ7LHwWKdOGxuI%2B9WwTlo8tzbnJrmMpjMqYtntHzJbDBhCqlWLNRP8LMb2CmHGlT%2FfRm2GxV%2FwhTbFmmDe0YKAjWUn6WN1QkPJDItaflqxVumo6HsCjtAA1jmgHQcKGc2RcUEiZ%2Fs4g5qAN8xkAm3EGtQCDjad6B62pg0P6CH3jqFCORRlXpZhbEf7gk0NIDJUpoCrpl59bjJJD5R9oapFkAe%2BIlcvMlT5vT0qGRR3wuWQVWYZG5H3E%2F3DRXrcEDtGMaFhcC8bf47NGVPmcr6PpXBQx%2BLFypoBCgJJMk56rzHGqRpp0YbMHpVnZZLyJI5mR3yx1H%2FPowjNkem%2FisEPYkQGZ9MbQmK6C7pVINFr1D3k%2F4MmzhVFT418noVwRShLd9i5uAw27vnNlLChPJhjyJxRkBy6qZ009P%2F7p7nRd9D%2Fl7yq9YvA%2BD5zhVUdQdCE24uMpovWzByOcNJdWaP1SazzZ1b76H55%2Fk%2FO1WCR%2BQI%2BoZGaNu1%2BEEM1W9g6u8m9a4fyX8VbpjC53H8y3fJLrQp7H8f8Mz28B7QVKviHEHFMmhlBzg1GxOssWw2R%2FZ9ZBoMC2p3x4TDxmZi%2BBjqkAVaxBd8HC82O0iO6cI9xqg1c1XZSipgQfoQsMolH7hF5oB9Ec1RLmPknbtugGe8uC2XIyfKJk4uPUpW2O54mm9MLnosz8ChpGHCJGpGi6%2FzY5Qw1GvfT7XvLI%2FkZ13l17x4WLmcJUjuTp%2FWOA9Jo5WaRSjrDjw7CXepSrmfSWr7u9p%2FF8LWgU9TTWwpIUTufyJclMYGwex6wKm6Uq%2Fi58beO1ceg&X-Amz-Signature=676a9a029e85f71bbb16162bf32aafaa1db6fbbbc90a02ab4560905e531ae708&X-Amz-SignedHeaders=host&x-id=GetObject)

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
