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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MFFJ5CO%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHuiQUJg3qdRFTiSIDs1YRECSWfTkFcZWzT6lgY7rO1kAiEA0LvTOB7qtv499ApLH8mlb8POehEO8xwpR7OAhSax0SMqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB07uSangicgb%2FxhoSrcAw0oIxs%2B9sVLC%2FVdrmZxUMSeITC690WpM4r48JUwyZPcZ5PPdpbp2N%2B%2FLU8xXiUhbiiUGptq8VD4YayYr5MI7obJsrLB%2BnP7RE3uaJzKtCok8DJ0qrd4LtBQEz%2BmN0zhdC4DMZvDTAVS5TKvJIn4jA2eanJ%2FEvg3%2Bs%2Fwqqnfn3jUhPkXt%2B%2BbEog1YbqRwdjv9GUW4Fec%2BEfGJwozjvESjfqWebY0GFuCDY1MpKUhxourEjH7Ql%2BHm%2F0PugGSivW0ahVl5pgHca9FkL95zR1U64NKeYLmuZJFxxpbOSqbRNW05ILjLiMcWgZLEVi5v%2BvtJOE9u8zRaWVD6St2zKYUdZs9FdgXoCPrQY40qEfBaU5iGEwpiMy5lsqJoaXngcCZ3P2yQfPMhuPLYGa9TVX04Ug3JoNNnkLg0jx5fQlATn86SUP0cY%2FnuYQo7CElognckLzb9X2dBuNLZq0%2F4nt8ROMl3isF9U4S35pTdFzwB%2Bjqq47TfRRJa5T79VXa5fsao1PdSDBVV8cF%2BGSjqZ2z3aRHsk76Nm%2BKY3IDHtWBC1FHVFecl4cqtg%2BAkN9%2Bvk0UTuievo1mWrGqH9pwtJ7t9ZcLHw5Ykhapu7hYaf7fwPZ7iqBB3ufs9letixxDMNqWrr8GOqUBBblFUrSBB3CmnGlk%2BkRFKH4kXiXz4L4VKNmNYRB70nKhPdqQ5mWgsOeSI3K%2FxYx61Xfuco86C4uFGjQ2gLatqQus9O3pYH%2BWKD9hCz8n0ZCz0KO4Q04BOmFIa5A%2FsSnk1Zw9mWoTGjSfD%2Fg0groK3umTG6uPGTK2wTT2Sh88ebh%2F121RW1v17%2FaFhnRl1J9YFjsYuPTuwGqAwAC9Uul3errppfHg&X-Amz-Signature=971b0394f89440bd7d92e4260e6bbc546b2215ee0a9d0eb2084d7e4beeeb1410&X-Amz-SignedHeaders=host&x-id=GetObject)

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
