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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTGPXN7Z%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIHSkE2oV21RSevgyxAogFwRL%2BgPGZbmFvSIswlwZVD1RAiEAqNVO5%2FvYr%2Bq1kU87dfG5A3HETAYqTPDzVvjtwdIitE0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMZLrKZW2aTi%2BUXSCrcA1mgjObu58Ty9m2%2FphxkxwehSnR7oPuLJ%2BJwg0dcMhFOpn4LufpBTW0pUYFCjFzqWM6gsQ7jRDgYZpMHAoxqB%2F8aUeqP%2B6a4yEej0EL4AzuKOBW%2Bdb%2BkVucztSX1RqW%2FqlV3%2FqZ9ydIL5jsFMdM%2F2x5SffhljDDlrdIVJFdN7oOS8F3QYZoP3JzDtZ6IH%2F3wril104PUyD1G1lPCTcg%2FwexeQwSfAGM8J4NvUciR4AUP5LfwtGpLx%2Bp%2FIz%2FBgKs4M5%2BwyPsNyWCcnA68AucgnR5RIkgM2Hi6IwU8QJWpvfZ2npYVxUMw7V%2FOCgcitgxW2H69IQ8yBExy6t%2FbQi%2Fda76dPlIqBDbcOeNm4lALy8J%2BsqZ1TBSUWQ8cb76FuO7PzKA3ytND6TmTM2dKbOLujU7Fs9W2E5clHZQ1mTXcpnH860G7YLMyg%2BUeWd8b%2BDj17iZKh3lQIVpUzAgUp%2Fz1M%2F4vrreYsUAlKsdHg0h94aTpr7alWiqXGcce5rgCHi0RRUtkIw7Kxy3Ru%2F%2Fc1NNUxSrBTsDy1KZy2C2qG%2ByfTfVSVxqnS%2B4mcBxna2VFNjy%2Fjj6CgS%2FmcBicFSBY%2FjRCBKBn1ZvugQueJMlqfMD0l%2BrbvF4gG8Jsm2%2BAzVmmMJuLncAGOqUBaPNRDnS%2Bf7fpJ9lenfDDjKkwrdzptmHa7KmI2fj%2FgQeKHrTJC%2BJuXrp54%2F9w7F3ax4NyIfk88gMC0fTIAnyzb4X10K792Re6ByNlDqkzPJzlyZQnJhziTm%2Bb%2B4tDQ1XGZv9UNZapa26qexjp4%2FRFTyF5%2BQBplAq97%2B76Lhy5M%2BQcc%2FDUYYmCdRpz80beMWnAs7j67XaoPml8VtIgP0JWoaybQwD4&X-Amz-Signature=9d2e86360b0f46f3208ab2d3c52e7d82b0422b03eada6cc771a7fdfb0eeaac30&X-Amz-SignedHeaders=host&x-id=GetObject)

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
