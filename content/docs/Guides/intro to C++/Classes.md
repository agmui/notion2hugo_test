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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53BXHLP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDKPa2yzszQfUyAludILswf0wyKD7t0ulvEhZORa7TvoAiAz1krsWLxLa9Em8Uvpi%2FxQUXcMCFij8TVvtCj3XnfAlSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrbEhOaVtPNiqCUMoKtwD4q2UUBCIvt6Mv9Q4g7IQUGVb%2B84zmwg2EFqu%2FLhqQVgWr%2F8BSvL0MMrFs9bnSuEYrT4rDsml4O0nrUgaPGX%2FDecTSlE9KSdefUH%2BUKgZOt66%2BDBhTH%2Fr4swwuDH2ss3%2FxtSWcYdtAaq6NLJF7EGC9YNTTLTAHRTNuSX9tS76RX5CjSJjhN0hl2XnFU5NktWtwMDDPKKuKBgVg%2FFezyd1I4D5DLLOJeo2JDod7qcz5u5Jd3PMgBkQp6%2FvN%2FAyr5HrGfzGE0XQ%2B4M%2Fl3RTgVUc0zP0la1ngD9ohmteHhRV4lidzraO2x1ueVZKtELleDdnV%2FjEMrnxIFPOfCnjlbxybptMWz4ond9DZ6Y4IYplwP%2BZ9HVXG9m7oGXl2FpI8givfGjLXv4bLh%2FdYkelNeNu1FqjfDs77G7wHiq1JvGdhTNywtcqGQN92i73O%2B6WnWd6%2Fmqt6TDsW8mmE3OzvBqqvGA3wkJt%2FYZ78WP%2BKKLHvcer2ahh%2Ffxp%2B7ZnrvaRrajrotOfGbwP9ZIG4jxP2ce%2B72I9AqsRf5Mvs09mnEjcqdDslXjnNRZ5QPdz0%2FxaRyp7cId%2BwHD%2B7%2BbZzvELGFFZCG8Csp9QtuCSNEf5KQ60tNkpaoOusxzaQ3EdApUws9quwgY6pgHYJ1np0UOK8kwnMj9d6BSBAatA4dGlbBlZ08%2By0Yv9K%2BOSaAPHoYS2cqCwNs%2FPM1l0n2DoJRX4o2Hffx5FhKN5bSaOXfGn2ATCbpAMAwylCElewmbTHQL1zt%2F39WRfMggR%2FyVo0Jn4NHCea%2FZ%2BR28%2Bo4AigEAyNpIsbxc9CTUMFca8A5svVvOQ6qdt69Vxe00%2Bq9tlzklvQWuId5hhGYwGgQ9MYZRL&X-Amz-Signature=ce6cb91f575b1c905cf8da3de7ddceb9e1cce89d3dff6a89fe0df42394f48bc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
