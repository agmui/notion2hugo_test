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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJ22GYZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIA3mrej2wExgALFd0u3YuUkrVfhe7xJTXAiKpf5pjwU4AiEAjA8NjxdLpbcYiIxaKE47gQG%2FptGlfpBSZmNciYRGKHoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIquhECG8VkEZf4i6SrcA6KDqjYl9PGOO9RoaJc8IYgPyhBgtapEILYKzcmk0i%2BDV82CsVJkYnbXbBp3bkCwBo7BDZUJEd8fWX1yeuPToE%2FXfFPZ5v5ltMM77ZUoEq3cqx8o8UugZrorjD1fD8WRYPONjKCeukPH6MupqFjeK685kaqk0usNHs9QfW23LfB0Yqy%2BY6e81mCZvylvGrqooIpfdKVC8PKK1Uef9%2BMext3%2BJe9xHAIgpsvV4mDb4TrQECoWcpIJBIKevFXN5WlmCbglNNIBBDt%2F5uehYyikCLutGuMZVKzszOZ0AvT9XALZ0A7zPOQDnUwSHLdT%2BVFHeTyl9bUnCl8xCdieG6szgtiLvYkr8yb3jhQfy94SrNWC9xRCpwwlwNubSla7tMpYsd%2FoY9wmi8JOAy9rexagd1%2FsxHAmJYDpakUZ2b0ja1uNHj6WTpnhRs%2FuPW2SPeLYF%2Fa%2F8hBW9hjBfW7sKWj1iu6JI3DSJLYlpvOPj00Vpi%2B0XI2MP1Ysi3020WehYNAf4BifCdN6Mx3qxkR5DYfeFe2tWfet0dfFbxTC3aP5albI7EvkwsW5CP1mHd3sU407HA6GkHi2rb9iwpliAKrWfUi4tCj0%2FzEc3zTIx8mCJUwTxy7h5bwBc5ouptJKMOjhjcQGOqUBxjnvDWxPWbLv1MYH5ofxgsnVw2Shd%2BVpfO8ElOgBZFyZn2hZWFgQRcPcc98rQ7cMYeUaxGUsQZ7hFUyVCZZolhGs2662RK4XICpsZRnXnH8aF%2F74NBPxgglh5eAkGE%2ByvLXCVzK2k5C42x1OiOo0kXY5OynGdyoiKZtfOm62C6P%2Brp4cFyXnw3dNeuxWpKJ8iPx46ek7aZFuZcjO63LRREdeodFq&X-Amz-Signature=52b3ed6b2a071f9beeae0e9afeac8b4c9b6c8712a78c063b13c1e3f4c41cfd10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
