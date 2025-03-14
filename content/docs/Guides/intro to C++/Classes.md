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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4QOOHI3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3WT44Q60oNyrkCokPzbrpEimfVRbKgo7%2F9yPD8EY77AiBZOfwQPO9%2BGZeLFeJh1tocQa7ATmQmTyogDxQKh8iXLyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7IIuLS6Dfmq7m8gZKtwDH8JyVHjuQqphXLSw2la%2FmGahXo61D3%2F9hwaxDrwbHUtbyA5h3B6km%2FjyuDGkJo3sx%2BwyVid%2BW4xRGOdsRmYma9sHe1SXG96HvBugSqADLZvLHEwikalAZ0nB5lku%2FBTDvyYlzCKtkVApf%2Fo344mrvL80AbYjkuYoBKYfTJS6hD0Z6EWMSy9MtDX0E8xRTqxFzauWCwT1P%2FlzYuSXXqD59R5t6K5YNu90RpA2wPdMaeI6980QHCxb5i7XeZsT%2BZC7nhAkYvxvGl01QDWgJSoj2O2RbViFar%2B91yjiV%2FCmUekYhb%2BDfrrpMeF9dY83uerLXPddLAb1faBSgj5QSMuUrHXluSO5abba0efclyZj7r8RlOhXV0ZkYsrWEusrLmzXBsM%2Bzd%2FnI7YPD3GGNhb647DigIOnR24mvfv52evzV7LK3w7d8A5A5YW7MtxMi%2BLit%2FWZRnEdYRGz6aB67D74Fzc7SSjFQY681AJv2IlDs4VXyuvqeiqizxYEJR5sKw4BD2Z69zMrYdh0JP2T8CioAz0ilcg2pjTrDg5aQCnWoB%2BKY50yWoRI9U7eU%2BJgA6sitOttI08PCRYU6CJXmNJ8YMr0wFDWviqi8K6HxM7mip9JUQBTnfQsPuJvU4QwopPSvgY6pgFkcKptLpQYswxd796ki0qYxNOLJrerK1mvtVTf5qxRLFBt40NGjjTer3GohbWqwMkatgcYbpeZQ6CowgnuH9%2BVH7mWflXyb6im9sRwx51eGaoR6xb7iqQ%2Bkr2bVVIQ9aKY0UpL1EHgT0YoxqdfsigWJhGRvWNsV1HRrRxYyoZCJ5hgwT3XkFRHGOaxSGy5YAxa88Sj9aAKfqWa2Wk2EW%2BfCk2%2BzfvI&X-Amz-Signature=bd48e2e8330e40b29750307de34b766dad2a62920e53cea33e7dcc82acabde0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
