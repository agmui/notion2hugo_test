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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K3BNCQC%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCoPloTLjTussB5gd4o%2FfuLO6WIPrf%2FME4A%2B3mbT5L9DgIhAIJ2zVrs4TUa51k%2Bx5HJB5EGCBn9vumrgo4JRG9MVgnzKv8DCEkQABoMNjM3NDIzMTgzODA1IgxTNurgjrZUZPTtiOsq3APK5buqUbDab9HCRO7Z3N4zRQdEq%2B72Amdwt5pB13Jr%2BH3dxbfHi8SCZvoNrKpQQGCNAySwxTm989FAUlhSS%2Bt4dWCARHvjWQBqKOQRlzVJim9yi0H9Hdt46bbzi65mpsOI5X8vPmjXcdIrilKZVPZ%2FT1oSOodofYQzn2JdTv1LXmTU2IC037ubq225sl2rtW6o4Qy7wHQInmZaNm2OGo9kPz5gtk4DLHckxoDxNxvOc6Y1JCJiWpUsTDvzS2VP%2B0sdWQ7stIgKCMHC1Q1FZOIr81SMLNgrYeJgInu6TA4qtVN64igpkTfC068XCmKVO8mr%2Fkj7C39hafSJMYUJZWKAEbxh2pB1xQQ3TdILa2iJIEcDAifWPfCJrQgf7j5s%2FvwScqHWnvUDO1Wi1%2FAty%2FdEiT1OAHkV1A6Jimi51rSyO24Nj8eCu0KPusoejoPS7PQEGC0vBBdc7Id0zo1G0974y5C4kvd%2FSHjQYFLooJtY0Xtksn1oOmm5Hf23uyyZKApWZxjYzaSHA%2BiZwqRhqCCtd2a7ltSj64XvmNrMqYyPOzBWkBHZ5AWqQx9Tt0YfN21ZPsymC93dmhsrNjRXo6Ch9aAtNYjJBRVDTXKkfZfBOOblr87%2BxDMODWVhjDD50Pe9BjqkARytw7OSrOamnws%2FHhgoVtZ24Gx6%2B8h80nfSTP1kfQRwnEBwDX9%2BTk4%2BLWbnOK01l8XAbMWx9fOQ6zwvrzbVxxRfs5Ei3qQaL7wlv2TqeMMeP3Zd6pz9DSO56exREWZlUmCA%2FP7lhfLvvrC97RIxJyXAixS2Cp7%2BfmEGiwGIjpaJ9jymq77FLdHN5CqPXZRouEr6mTns6UqZz6jUtpyqFNN7XWN4&X-Amz-Signature=a970ab0ae82268f78a48a9d4fa71f0189bd7225b1a8e3220e152d964feff62ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
