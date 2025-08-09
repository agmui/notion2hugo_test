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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIHJ4UYB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwfdH6Zv28wGqclgGEZH%2BE1jxcu3ulYbuqJxJfPX%2BLYQIhAMHHpCTLKemy47wnaU%2BPuUvoEx7i4iDXtUnNr5SEB7umKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYNKf4GCZd8DGzfJ8q3AOMMMB4xzUhZ28nw2dW1DR9J%2BT3WK%2FFFKrBYbpk9J%2Be%2BH5jus%2BhITHsDdkdN9ih3%2Fn%2F%2BkWpxV2cu2pHsJkEIG085dqSuLmmnvaxuDtqdPInitaxZ0ofITZVfhPCB8AQ9EmhRMdB8SI1d7aQcV7ygNeSi0mUmFOenrl0jK5ynBKtfU9OzXv3WqGnfLC%2Bc9B1ajozxB9hZaqyocoiB4HoYo0OV%2BMtRoZ80srJTm7MBM%2Fx0n%2B5ewHwONFZE47ZZ9CZRpQiAI666qUX8dFAZu6BcDuTd0I7BOSd8e5ahU7trQ%2BduQ8z3rjvfvjANLPeMf7dE%2BqFV2KVzghCb%2BxDi9vuelL8CLHQ2u7j%2FjMvb2GrnYf4ZvT6WvIMD20NvzUoC2zheEeQDDecFVP%2B6X5wyLHodYBUSWGBG7wM722ZlRB2CcIWnvgWvvdahBIDobnu%2BL2Q%2BJJ0PPVvnBoP99ecwxk4CJpiHU0ArwHBIvJoXoZYgEsJhjoUM4BeqpuEr%2BCLCLIS5Z6t3AbsvRhTKCT75BkV4WA%2FlJajF1ui%2FhSZfOOF0cJnWWYtsQy1bQmNoZzQjVDX1vldZozFfV9kB8Xg6e9017ebX22ZwR7JgZpyp8LxhfZToVjKkrTeQAlh27XxGTDC4NzEBjqkAZW9gYI%2B%2Be2OCZwtMQaMv0a%2BKWORMRmPKNv1dSG0oEcoxxPokKbhnhieqr0MbZeFyGGZX%2BX2y%2Fv5%2Be9Y%2BvwvocTLQQ2Bt348ghIZs8VJKPa1vfXqTSLtU8GA%2BL44hacJXt22v21mQph%2Fkh8JdHJlK0ZaIM7IPov%2F%2FJA9Zg5YgWmSh%2BGd02uBtmAJtN20MN4XFWkJ0AMZ2xIFh2FLsm2PNg5Yp6Zx&X-Amz-Signature=99ae00a18438805de03f2071ee68c97c091870749c0767eae18d1b51877fe0cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
