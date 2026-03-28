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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5H42ZML%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCb3oLRYrRv93kzXUvkUnoYCPUAzL2RDPZhwM8Xmlc%2FEAIhALQPw02LdvsmL52saAHErm5S%2FsCEUeyHgsE%2FTNooTj8SKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfW5jOgZF0Gs%2BJffgq3APoFzpY%2B0VXdiA6EfCHWb%2FE55Oc%2F%2Fw%2BU69VICPTIygHuBhI2YazzjAaIMtYPl3ZZC46GPOEO5dgHjQKpHDnp3k4maasKkfTbLL7ziuqSQQJak8r8LuK0MgEq7txZS%2BNo4JhNXRx1S0u3y%2FQBlo9LO4Xfcz40qCAM0qM49VCJMdmpQyd8adcfQ9paNN4uBmHIkHAnLgRGJnPky36Ksl%2BIYSWn3ucSYKi%2F1bQ6IH5ZzHQB390OnCaM0W%2FhpjTJAjgaiSezr220QMAmAr%2FISO3cGtiWeqOf8oJhqfLYeBcSNHHEwee9IuzGJ7hLQN8QMiFfmMuNkFHYErL9O%2BbmxStpcDLFFcoASfVRL3DDNmwDWNWZ3mufWl%2B5m%2FfszsUN971%2BGFRoZPcztpzT7JeC1rHFQw9m2PnqL993Wb7LapwJ3dpxSQqgQOt%2FWhTySfu3KCHDxE9zRHon4epoi6sedD0cbpBsHeJKUFfP4nbTj1MdgSKyOmNOT1wJ%2BE4%2BMgeWfQvBctZ99wt2b%2BtlZGz%2FE3hPhmh83LzdUSjwf%2BHDQo7pQVepDzdjzE5ydDV1mK0jsGtHHweQq%2F5OehKIUa97keRRL6E4sRaOK5ggUcHP%2F2LYQjhFtP47RCKmOfn9UKWVDDb7ZzOBjqkASu8j0TBQe0%2BI0Og%2FqFXVIicBV4zIGvUcQ7xs55dv9F124eI37nGwc1r66%2FtT2r3aRF3huEG%2FQtnw7tndit%2FucNcXR5vUn1B8YyJ6dspOdZ7mKdlMzGThx7N2IBFm%2FOut%2B1mCP6wzowR2YRJjf3ZbldYFQ19CqU5HO5X5LwRH9ufO%2BOBO1cZJDvz3kleqoL1tfBdKmCKRj0Ne%2FaR5FbADj03qe7r&X-Amz-Signature=bf8d7127339983bb616959ab331fec9a9fc6e6aacb0db178a305cc6ec8a52721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
