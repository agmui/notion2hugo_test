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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6TEXY5I%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCOV6Y%2B0IKg5pLFb7r2MxfNf%2BF5BnCPHC7Aoc0pW%2FyO%2BQIgaLRhE%2BtlVqCbGwBqEsjp8Kc%2BMfg8nVOc6qcyVfCnliUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAey8hEn3uKkRdRP1yrcA3C8KG%2BtuicjErMKjNjR81E6AdDLxzEq8JUDkkmlVkRm846BwRJ5u0MLXnX1xqXEqDjKI112hPFkHFXg1Y%2BsXCXgU4hMVOh9ws7IdMl%2BPojbpuPQEpGs1vEY7ulvJz5Fpvip00AKnW4GFbGqRBo8oqZQ0tavBhJuG8D60O8uLbrUndsRbzUHZbznnw2zrRDARFYp72nRCsyqozj0voMsHQpnloqOm9JOJo01tz1ecdH%2FiMpATr%2BS5FZBDEx89vojTik75Y4ftnyDfbVE4dJnn%2F%2FN3RZsuN0lkby8bZj9tCf%2BVeQaRfq0sqO73wtyrhNzmjBsJ8JAq3Eh6fhTmfj%2BqnBsIOHvesuYgvg1LdTgpXMQpuJ3L3UI9Kq7tGTlioFtUzUvzKIzEw%2FBEGvCcWR%2FN8HuiXummMWkxy%2BnAteqsxCqQj6KlSuIZ%2Fozc420zEnFJ37vvkQfDM%2FkueUSNMHi1j28lL40Vfst3nlD%2Bd4UU3GkhLB3VQ0LeDjeMQxlaTxMUA9PVvOQdGX7D29CKts3srYsfUl0fnyBKtVs2i%2FHQBKxv6bttaQ0DP3EwBofCSIPE2djfon6leHdNgS%2BaHkC7uCHgMhBdAUqV3NxVSGWCO%2FI8ra0wx5uxqF107XmMK35874GOqUBZvQQ%2FWqffhx9%2BJllQyS36rMOyfbWCd2PWeCC893Ke3HP3d3RTmZH5W2t%2BjKcb9EDsUZhFieujFI%2Fz1TYSCfyZNnayYw4ChhHhWc7U3GV8yaBiUSECQ7n9HpKZgD6FWxkwHtNqDiKvq17MSlULnWFl93blpWTeCtVpWGXK81Kq8tmnNOaNHyL8Cn8NXN%2B7wyvUgWrL1gcDOXwK3di5c0kDAAtmfdl&X-Amz-Signature=ebd4bb52dd68d62caa0ab52f12d4548e541da951c5a1010452ae1eee7e2b1f73&X-Amz-SignedHeaders=host&x-id=GetObject)

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
