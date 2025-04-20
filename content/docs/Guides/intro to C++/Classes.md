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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMFICC6%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDh%2BZUu7cFBrjQ13yViI6NNjXn3LfNWG%2BpIzbOZ2kKH%2FwIhAP6bChpZIk9U6jAOOSyC9F3Ruvbnc87Y%2Bt63458NiW%2BTKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH27RQssLrbxCMlC8q3AM7ieUjOAOYAo1W17YIc388VFonYN5jY80ujtKli2OMZAjbAKCriYOtEeOvF4HvRncQG9rqpM5DTED03nRoXIuzeTl8UqE4nno8eoqeV3K%2BKobasM5hqtotDAdqT5If6OivKzivhTG0LfW8b7c3OPsUnSR6TPXJSyH3Xnq%2B9E8gaBi%2FC5Pqef8WAf52mulDr88W38jUA0bpNXywfucDhjghLZ1u1KM1tlzDlU%2F8OL3meZV9MM1IS0c4UUM%2BhU9JDQf2zpxQmvRbu81A55FaMAzaToMul1EQQeG9V4rlXn5HKY8RJNtx6SmBkxOynGRCUVIcbwWJLYeC7zvxst%2BNK7NLSSknmnMfSP6IFG6AoZBr59815LK5oqZEi2PlRmhlFunbeA%2FhUW6LWlGiFejiugFFg5IUp16vgfgDBZE%2FUqDO0XYBxBuZ0jJJ2iDsLhw3aSPpJhwg%2B7DiXq0uEl0711iLS9Wr5RqdevqV6HsiT7pevkvNveCVpsk4paRBv%2FYbhIvYZ4MkoaIBZ2llZyxVTj%2BlbzWZnFLE6VPaIpJ6gW%2F0J5q1NcJ9I081DxyzymAilW9mCxesubpHDClxV1sUf32kelzRXR69px8RBZRB3wj%2BiBk9fWEz9rXKyNwSizDTo5LABjqkAR2iSzsESabJCiwFzWaNla9F%2BmskWgVrqctpDo3pILISfBEb6a9Os03CIf%2BnyvZwsE4NxXn2G80o%2F0HYbT%2F9wAqn1v4U5Mf4saTOPEvXsZfwLWdxRe9eKBqoTtfPF9PO9d38i9LHUfV0%2BaKVDdWNkZd5eQOpr6NRcV4c74sU5dt9LVkAkxCQD5gpOo0sas7UT%2FOPTuCEBCC%2Bdix1eI0dNT36eIVf&X-Amz-Signature=4b4c686b4bdaf92430852ef4bf834df3f8e5f411dd1b6c31a96a424ae56c1701&X-Amz-SignedHeaders=host&x-id=GetObject)

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
