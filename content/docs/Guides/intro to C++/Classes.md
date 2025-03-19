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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CSROJ2N%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDxkzeVkgAXvXpz8TTevVv0pKJ7L48caIbJfmY4oiyMigIhAMLJZ2OSOWzabuZWUqcqI1uqxwB3YLQSOkGf4oP2E7PeKv8DCHEQABoMNjM3NDIzMTgzODA1Igy0u1uqGdj9dw8%2BiAMq3AMnZkCr7J4mATOXWENX7L5WPEn%2Bcq%2BfYsQac%2BJ6oPH9bbuvEHFj3ginSUA1WbZxmojA22FizMIG0vz%2Fx1QcX4vaSr9VRRsCz1xlIDqaZxpPfiwTt79VNJ3OZT1aLPtrgOndC1u%2FbGLsXOcc910gX%2FtqrJaU%2B4lnO9W5ujkbHKe9sW2%2B%2BbQ2OhJ1qV91bVVOR2yrSO7x4if0zJS2hW1GoFpyNdCK0RCHvy9lLT9Lhw2CDzp9KojUrQbHt3crNojJSDQMvBJYQWkksA9ZfKWenFPGM1jDlho2WwQ3KsdjZgMZojSp7jh4l7DkOKCdL%2Bw2ek8kskxlQ4WeRYWdNdoe4SkcNo6wwXgGN4nWdKm517f4tztGAj5pH4MlUN76TOVOVqZ3f12uqxKdhuytVEpr1pY6dPW%2BRHG%2FO6vlYI2I6EaIJ%2FUQqBIot7fYezU1xCDMoqh%2FP8B56IbfgfnsCqr0Wrov8LeHsbdiVoCWVUxxXS3dKVK7Htp7lpwu6J4KofgmORTnw3jBY0slAwy3a3W5xqVCCfM%2Fqh2w624ctbhmYtQo0qQ0wj39usaqPPe9mCakLaOXkAxLLSDJ7UWTrbd2U4N4M7rPVfrn5OgrQKmsPzn%2FJR3dOHcTPaPST38X%2FjD14%2Bm%2BBjqkAU4%2BU1fRoEQmPzj5Wtf%2FOLp1BiXK1nPEE5NwwbuvHvbL%2FXNEfVhxm9AUmbcX0pVPagu1ixj4J3%2Fot%2BPXPaspob1Mk%2BmVfi5AFSvG746trPuR7O%2BYCS0dMlhCExvM80UItr%2FQznmH0eJU5pIfWwtefgy1EmhmrH%2F6ZD%2F0qr6jKU%2BwiAEOCj5cOAE%2FfdSE0mC4TSWIKdHokSG5lGtTjqACE1YHbX1U&X-Amz-Signature=bf349808480c78ddb438757e9028842fc9a6dc829701e8499a2e16c76b673761&X-Amz-SignedHeaders=host&x-id=GetObject)

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
