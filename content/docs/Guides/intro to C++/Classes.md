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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJRCYC5A%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCw8A6Zf9FsppOO9e2kZQnK6yAVSjytUXI7tZBEbTYRAiEA1ogzNY6BwPoY2jCh6LHDNk10noDh1RWR5%2FsHVH0xVhkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmvtvFqhneA5K2VsircA%2BObBmnJ7sZHXvpPigTE9zCM6GIhEL1QUiQzKqGu4eJrzZ99j9PuoP3NLtXRrUUWJlE2OTmyjru1IiBTrP%2B4PpKs4Fn%2FbslWmexqbo%2Bz6WHJcsVWJx0%2BWU0By9sgCzP3Gxi8cx1%2B%2Bvry5iecuI0K8F8qbT7KKuzvOdUQF7pYj5LRrxAcszd79HYOH8nLHkhnYCvl23DAeiWr3OMd2WvNpzdRGw6jnVVSZWFUVYimVsbxz%2BzPzsWq2FQThRCb1wtknDYq7TkL3icifxCdyX4Nnkwe9YQoKN4H1iJ8nfv1T07jBY3g8DqN6l2JX0bTOgos7M2RzNhzeD0p%2FDT3hC6bYiWGbSC4UffRdWO%2FDX3SlVIoLNEEyVOhNbbuPNVM6%2FSeJOesXeNNYqbgu0d8ZxKbT0cAliqkVvrlkByPJTjJPqYd8wDBJPrtY8Y0tYMe3gZiGuHfmk2qmbV2tBDGu52wpxaMOgfsA1ARfd1wcHN%2B%2FDcAS%2F2e6CHqAstg%2FQ%2FOAltwkN8pkqWzxXQ3UvZwpaJD2Eqa5zv0kwu1Wjh%2FQDkQUr2OagYNntxNvK102DO0i3qjDiUX3MYTBU06aVD9Fy1hh5aoBFgHz%2Fun1Gs6IvDbzl8RfaNFra9h7STHRkkzMMHynsUGOqUBQjGo3N6v448QohdOsS2dl6fZ0lnAvk2%2FfnXvbLRQ6jIwC6wOn2c6MRxp9EWhK%2FYxOwPAYRG8JGJe0K4gdkeqkaEZs%2BqG2voImgMb1%2FF9WW2NQubLIPkQJZkra7bmIr6UwiRxRh9osmTlUISjTWj%2BR2ePMIB4ss4TNEkOGa02JoWkWsZ%2F9qJpUK7g38pPMu4f%2FBcmfKGgFlx6johoqjz0gOPPTPtY&X-Amz-Signature=bdd9b59640fa64120a4d109e8ee4f05881fc34104e5a57e3b193a8570dac64bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
