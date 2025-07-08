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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLIL753%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T140934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLt%2FPfkqb6TeFRpdm1UyAsQNdwJRmxeReM6rwpp7D6qAiEAn%2BxwWjWZMoQ1n0RpqEt0gp7PMdIXCtoDR8x1kvQPP5EqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeQUlN6u0BDBuJ3ESrcA4Sk5t3fbyfWgEn2Jua%2Fyg5MthmNp4bS6G7WYOgWvNQJNXY9nrgDNIinYfJlj7ITbTfakYQuiYTiu9Qz0F9SXAyf3%2FJI%2FXwt8xzSBK7ID57UDHOL6mbO%2B3M2tCv7Bz5UbxTHSoisbLAF6YL7MZC5bDrpHMfK59Z3fazuL9THjRLNq31c1EF7VHmt42RZt6n%2FH%2FqzfW5rRIkE%2B%2BZ4oPtnNW5D1Zw1zfyXi%2FEeoy%2BhrKr6vJP6dufSQjcMntv4fRnMY5BnMBNNmS0Oif1NIubihVmiT18GSWWxYLMzG7aR2oLXnhNx%2BCtUv4%2B%2Bdk6fSW0tpq3nQZLGSmCIavH3B3SBrs6d%2FNPkfyVy%2BX8214MqRZJx5GoXxm8GRvGBHzbGALnM7d%2FX7NCQYpQQuUN4S4cvMU3pAxVtOf7IytX4Z%2BCR0rtCEpAREhOqjNfgdevc%2ByGyhcmcK0Gd9oxL2cILhW8mT6yOjA222nsm%2BM%2FXqqi5fWso2rvLNCIcfk7ppjEntRL2E27vt1KjQE5P4821nFAsyP2SqZHs3cnfjSxohIYXe%2FYN%2Ff%2BN5UMVlWCqgF74X58%2FaRa6UZ35By%2Fvzz0%2FDiIuikC6l8pH1tKlj%2BpY4mo6velm1pOliYX5phknofjWMKWmtMMGOqUBo%2FV01vOe7fQAsomQZAxdQy%2B%2BXonOVaVT0U3N2J%2B%2FnN2BRlJXKL0vV6EmHQhlh5zk0gdx986B0cVIV9JJHS8imkkuhs2GVfky8iBXNqmvJpB6C5PmMqQp31Ngx%2FxqieKYdKzfMj1jL12p0sbWmn1hfahS73dFv5VrXg3F5gJqQ5mF%2F%2BROJADkEkul5R94HgULfkRVBhXxKPdICb%2Bo4Smu1Cgvkjgv&X-Amz-Signature=6166c155eaf30c5fc178dfa7d503cef8edd16c190d45230d3e57ebbac6d15102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
