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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWURK3P%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWVPuYvzeJaxEcNisFxh5q3yr%2B88ZYNKsASGrEyv%2FP6AiEA9arVyO6E843pjS78%2FQwjvlp9SjCLp7vUHvxt204%2BmDcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDynVw3omQW%2Fg%2FMzdircA6e2zVHkdZAZzsbs4uJWU1yxJQGu6K8g6pYrSayLWVwxzM4K9nyPJwnj5mWH9vcd90NZvEOLjleBo6yew9J0P7lMOIwXwNsr0uTTmuQ8HwkMC%2B9sPsM5tRUgaCXJ9OYrlCQ5G2qwny11bCj0KsbIo%2Bnrl1r8t22HS51lm%2FIXoOgo0ggV63FSjav3%2BaWgZMV%2FBnr4kYMjypIfd2fwapO9kkytgyeXMMJM5VItW3K1%2BuJrkks1oGfU02jD30rBLZybF7YkQkT4MDYHu63Mpa4kLD5HxBiy%2BWBRSMaU7VyS%2Bq6IRAmRX5Gr0y%2F%2B2grKNIk6m%2Fq0o0%2F6ZznKkwQbiMDWy%2FTTxsiDNh5iNtYi9Eh2Bfa9M9ZHsRl32VKoaRbDoqe5V93XTfFT9s1YRlVufsyUV%2F8yJQURu58CpkI3TbUZc2hpEVbqABPpuM0O0R5clTwm9pyxQqWM5foUPzSHG%2FGFaZF3zapsN1d7Mr7nRnOFhICf84NRJiKtEffQmIY2%2BGCqQnCs2kvll8%2FIH9OyPU%2FChD7Iku9JylXEZsaTLsuHMRU2Utm1LrBQ%2FPTOGCbJSDZcNhprwCnSazx0EJLgDPvYNXLBuYx5l%2FLJBYWI6EE3ZLxXwsocCWd7iEoAWEhZMPKAzMMGOqUB6d%2FEOra9BimTFporbsYwkDlOXKdEBVOU%2Fts%2FQjIRWwJ32DrMv1p0qyW4YsX3Gk9DGmKPJju8Q%2FNdDbXrOKKiN7aG2zrvC5flfMRcTXmtIqIoNmambfIcIUtKZOFtxKfZcJPqqifaZPP6yKKYSMSSK5sABuCUxyxY8JUtIwHk4EG9fYbEl3fvKpGlHYBWOUxszAwx0u6WKRn5ND9RrNF4D0toGXPf&X-Amz-Signature=028abb1524cce39140f256cb72b32f26f96fc7ca68482e1cb0caaf02d6c80502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
