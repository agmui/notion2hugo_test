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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHDXU5HR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw8XsKIVVFSKiM5I9AI4cDmcqjZMwEeodVumAu8IOC5AIhAMXezoMRIm%2B%2FSOoi0NtCaLEHXfaCKTfsfrJz6uyBnLuRKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4OWl3nX3NP%2FtNKkkq3AOa36v62nSJKxkad9nWiN9G%2FBjdON2Er7%2BlX60PtaLNL84AHUsJPBb%2BYJVZCtgYmIXOj6yxoNeXy4%2FBgGh8LV8qpKEE8PiYty4yo%2BzFmTHefozCXXNiZt18lPNw5Yn018PczUrawsMNraPRO0g2TIZf5MwKRgJnJVVLR39nxAN9hQq9%2BdMLgt1JpHsMK2z73wE6WcjQqrVyukZ%2BQnMPUjWTBJdkzCF1YhrsVHnTPDjUtmBiUM717PlkXEDqnAeqqb940hQfggSvb0XnFd087NCHdxbPdty3FViJJUk3644LSvSmhTGBZyObauT0%2FonC%2BO3uMRF2bpaqdCz5AKd0Byz2mM03Pl3lL6iyzingaszfbWC5lGa8GMYY8l2e6hRVBLErSNasZswTr3fxzlJHEuDVOuoK5nI%2F9kqMZOyCS2jZF9N8lz7kuDFFmc1Ambd3uGVIlObtabpkqE1cQDs9vLb6B4ZrLx702zIgZvGPerB2YapV%2Fx6GUd4TUhq3PIQpyy1UyDZl2A6AMjE%2B2zzQvYpugBuSUY29p6b0GSRuHsi3opB2wYWSP%2FeV8QpNv0gQBFAvoHu3IozuIeywLjbhKrE7cq1STNEH2P3%2BsjuiJECn2GWE6qY6HFGFJrkZozCI7ua9BjqkAW%2F0Ghhk105r4tuy8Yoi99HVSAVI74hnlpvBvhJKkUyGKm0WqZ%2B86N3K1WLL3Cc173wt%2Br4VtF5KdpZ48gZyR3RJUSrNgb7BeBrUIDlN0%2BJP0YTOYsvy714VaEBsl%2B%2FemuBL3d%2BTDypTgMqS3cT22OZYWwmjAKjSWIDthPjgFn2%2Fl923Ond70qjyN5%2F%2BPWREevgoeq0PbLvUGE%2BypQkiFv94uUgV&X-Amz-Signature=54375b4fcd578a757aa2d6c9e847fcdc631b78b8b5df32d75ac74a9261eb186a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
