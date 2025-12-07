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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDK5SC5Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5fHnI4hZXe2BRCQdfd4jsummwmE7K0hu2Pi7JAqjMnAiA9vJQoIYLIxKtWbMz7MyOruEmUfEdfCBrFgdHzjNLhyiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJt8W8%2FhqWnOyyI35KtwDu4nrRQS0HXcXspW35BLfhDi7qPuY6wJ4QYoGVahkJErlDZYonlUCZMDu2mdl9vDRZWhAu%2FsjJbCRrlfgt7NZ%2Bnj5KYDBDgMh9etpb0jXcV3JqRMaRPTstUMZDeqH%2Fj9nSlw1imlyRRs77cOL7B9haisCRppMknAdcu%2F6KKj1CDSjHkvByRJoXOwOC7Y6O1lw%2BNzyY5cqKvEMUw3GXfSwt1ewUcZKn6kbpb%2F9jAQ1r1I7RJ%2BnTZARvV2pjRul8AR78ltOvZNXKqjnjd%2BWDss4M9WHjBkfZHKWc7JfV9DcwnbDk0IpZmsKMUQ%2BNnM%2BFZdXo4D2EeVQVnSDtm66pml9KyTSWWu4FiATyeMCeIRxZbhsLE4TAotov%2FUSNpxl6XI7fVfxHmci1NIXjo5QazUrY1pOmM%2F1nMvYFWhqkaBbr%2Fb7smzNyYAxODflNx1bQueH2X61cymYPI%2B6Fch032oU65hBvtLHYS2EMDt9djoe6RG%2FhQKZsXOnbB%2F9IFmU6%2FQyB3%2F%2BqZYLRkCj2oyeeaTYEy8kRGHzlSBa370zBuEsMBJpDJ6WYfcAUo1YkpimmCTYU3ugPIui5Yz3smB5UxSA7CjOu57z1T9KDyJSwhWh0AbJZtn199na8HsU6uww9P3SyQY6pgHcFQK3N59mYcVPenGb4qbteTXom5GPIZVokMnSLGHXV92%2BY6QNqvepj7%2BaWEi393yWYK1CeuxVTYp1YRSwcqknI1%2BFtxawRgDVvxHFwcqs9xAsqs0J5uZvDHEbFLkdBhlc5kx%2Bz2xJyvGEhywj%2B%2BCs%2B1GiBcDGTMOBISxaG08IXMPhVe7aTtYipNO7Xs8K%2F5SlMP2KgcTsmaC2LBIBgkyOr3B0GH1R&X-Amz-Signature=62fba8f17095f9688c7df15aaffe217ae5158c4440cba5c361e39965667da5d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
