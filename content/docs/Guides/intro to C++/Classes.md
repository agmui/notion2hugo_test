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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2EFOW5B%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQdImKA8UjpgSB8QM85Pnnk9g7F16sjc7mkcO%2FN%2Biz1AiBltzuO0n43VTGlaoBOB0OMjbdvxhjF%2BKS6EuKSE1QDzyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1QJDJ5DhpOEF5WBzKtwD%2FNYkK92PUrR8qDvGQBnadUVuZhZf3VUxDb0Gz%2F5Xb%2B3DXLniUCWkuzjZFs%2B5wDvhuoYzcK7u0XColv7txWMdZRYiu2WeTcyUXtsFWcT8a8dhX2h5Np1SJ20l6rHdLtJQ15bpkKsyHX5K3XQZg%2FJnTS6HB7JCDvFIYoH4an3mwLe448TPfb0nEBFu78BsxGnju0wEyTA6ys1Lkq03kL8CHMmqoi050DQCB5YW4qw%2Fo%2F8ChSxO%2B6O%2F363QGQi91uQGstCWxyTGqwmDHHixNjaaT7FMIDzAlnH5o1eIzDkm5D730rqq4BbkafGIenUykezA7R7WoA%2F1KyqSvl9Whwjh%2Btv%2B4DYB4oVfgNR1WClV4PWud6AxjMrIJf4yZaixDqQQVQapvF%2BpKucf9%2F7W9QqnrAhB0yeyoqGWiClrVIPIZcGbjfjd73Hncry7zOWGCJr%2B9VSqL9qQnDc5pSk%2Bt9BcUK%2FHt1zjVAM9AUTg2biRmD3hGkDq7pT1yNa7UybrAqbpnppf4Fibz3Bz%2FvXsGClcT2g1oqzvhB0TJ%2F%2FQ6uLxgJJ6wiDyqF1yid53Cw9DROwIz%2Bo8nZ1hp3pg9Kx1la0X%2B%2FfP%2FuzlaGLvr4dV30%2Btj6jRTu5wmBoMVVoN0E8w5bL6wwY6pgF3RVFn6eA97GhBsLwQS3d1Jncx7k%2F%2BogeGzYyu5VKn%2BjoVBYUw76c1DCofgMOBUvnPlNNe%2FA%2F81S%2Bg5MSEK77YEWSdyW90SZVIol9hgXAuiEClq6CJxQoIN90m1TPpCqwAe6XtCp5An3zNKsWUpnU3%2FLxXtDF7D8ZvvQqcvh6pglt39tti0Ry8F0d1pyLWhfYlXMfZLfTGtXiMJiOA3B1cgKvcy0WV&X-Amz-Signature=367161bec44940db1560112d6872cfb14242f6d3c97edb9322de58c3abdaf2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
