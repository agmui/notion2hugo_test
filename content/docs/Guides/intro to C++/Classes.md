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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXFFDFPA%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD7CxOIX01m8fpmZNTJOhDC29SV9NfctSR1EtUmDkB0rQIhAKNJnIMxieSVv6q3EuRr%2BSET1kGdf2vtVrl32AtB4vC7Kv8DCGQQABoMNjM3NDIzMTgzODA1IgyfCClV4Jd3O3aQRHEq3AM9RprHZXMKCP87NrEI1N7x53DfhXV0hu4DOqLWUnd61VzNs3AdB7q5N96b8XGbP%2FwhTM%2F5FIzKdoiBsMb5%2BcuwRd59jmVLERTvqYzeSq76HUvzn59HbJIkQXKcXC4t5upEfpwpYDgj4UjB82VQcXZKjezHVJ6hLK3fXH0gWwG4huHRo7tX%2BW8HiiZzTZndDAul3BwQpyOIEUKjLip84%2FvF9lHzeI31G3upW9nlstB8H7HAmSU%2FZ54qdOuI55tb4tB9rZ6twcNcIHjNHyLy5kQbWU1tRxsTeDF4ji2zjhwtmI6ZL7IHu4u4C4rg9ZPa0%2Bf8tpKWlJAhoMfD2Ue5cBIGvcIT3NYEus0xs6DGGuJUwSRs3yXsiQbHTOAdiVH18VZ%2FqASofPJdK9L4EQkLg42ghPqln0G7SR5lN82kiOLNaKXgNFzqgnGJE8qjPMHSjPcNOFHrI4cIppPRPBgBK3uFlcjDxoVz6JtHRviQ1r6PD61vhVKwDnR%2FRZWh6w%2Bx3YbRpA2yKvR1jS3zsPha0XN1ytyaQqo0v%2B9%2B778kZLYZKKr30SshODnQZk4kXxpCGEvaTlMvsCpHHTgfYXSc0TmgSQzwZpRmAZM3pX11qYFHoGky3rNTQ8JEbe7UTTCf4N%2FDBjqkATPqtJFs5nWOYQFnXnkrbDXeISiFmuH2QHrRgh4nmVHrW9W8nWI2NmYsyMO4gb30gXLR2bto3zbakzOlMNjU%2Fh0coorhAQosgSrA8yFC%2B9JENIcsZiwuCaG3uYKd2rnSm4Wb46Ym6VKZ%2FcBGTnSC0ax4lyNd84aqkNWWM0zx8%2B70zHAoEFxbhYbzYdwNSyZ%2BIOfF2M4%2Fg0vInXnTqeTGtXZkePjy&X-Amz-Signature=ae6469ac8e8eff524d1fa58993befae6ffbee6b9574c54aa248c1227713c448c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
