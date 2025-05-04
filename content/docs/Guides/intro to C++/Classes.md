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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK6TVNFD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAwffRnFNEDyRQxGrS97uIXVXEEylxOGgYhYe%2BC9V6%2BlAiEAptoTj2dNGbwO0QyX2YGXHQBYUrpvf3x7pkaY%2BAh6s9Mq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDDgpEMiVkrwlfT6zuSrcAw1X%2F59Mj5Oqu9v85vo5LFXMquRYPoLYH%2F2SUypdD%2FX4BN4sFVsucs9wooZ7RW7Y%2BTSC8C4yatSrvCXkP89lWIaAGzBGykwbdUYFN88t6GZhhwXQc%2FAs8vtag0uZ9JrovPpnNkYUQZ0v56390AchJRzUco6DJ5C5fVSDrmdbhmJUKttGldHpRfbsl0HNro0O9k867U1mrpTbm%2FrnaRjI99GqZv7Z5eXiiMmT9z4sCzUtIMYPVtKt0LqblyZ0n3z888hdxxsNkleLZA%2BF5hM69AfJEre6QT0RasrP6rUaJu1j%2Bee5pAsFzKOvnOBmzM4MBmo%2F2JI5JhiamWlJpaQAbcnBLI9pjHwUlkhTsf7kuOR0BzfBNCiVoftZCZjLXGerGcd4QxoNzRjUrhjXOQiMWSLrSyBNRjRUaACHzQcMdfKn73AHIm0LX%2B92BBs0Yx6lsh2wXyKO4tfnlcUveBnP1YMyMOqn8K7D%2FkB6kKoZmnSGYFEDYiL%2BzmaNa7ds9qYj7JrLZMXrfdtWL8wglSaSa3mh1oZ3armXY%2BMJWzuKG1Tmv6%2FUjjwT7EUrkXMOn8ar%2BSZWLhV3u4s7AEQkQCqUnyajTeFgyBl3urTTTe3p03SxfT5XUKjsgqq1TbE2MMqP3cAGOqUBAiuvR82Q01BW%2FxBSEypAMfGnGwT73gJlE1d0vPgd1nj%2FrQp7cVNpOZp6IaAuJNZs4zfMShpX70qXV8vebsL6HgW5iGdafyFI0LxsRtyQ1ge6%2BHSdXYUkXiuZZu9bW%2BaKmsPhd5gak2VOu40GMwB5TSSVaMwXaoGRMX%2BBDNde4mDkKqaoQEGRS48xsVGNRQGSStWgSP6UxqNp25izljS42SVdZPwO&X-Amz-Signature=e804390da62b7f44283f3d83a4c9a37c7962e71dbffeca78f0e5945e6ec5dcad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
