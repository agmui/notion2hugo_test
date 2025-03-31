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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4SKDYWW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCPYdBFJkFYfWq7LnJhQZdMEbT3m2w%2FkAHX5KvtCRKDAQIhAOWltSB8qLn7JhxgP0fJZJYBNP4VB%2BcM83EW9MjLO40nKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfmbcKLRzklDuUQFgq3APtF43c34Y0XLpLG3FihnHAMBcDGnb0fNn6C7rD44smSaO7y5pYXh98uxLDayo76H2YIebkVWB65QBnyofB9dtk2f8wFmuNhVFViLIbqMYUOe5TFuOZnYmQiv4cfoFQYjKTBC0sLay2cgSsWsUK8lRFPhE0IN5fsreLG84La0Af66ocjf0IlJZ%2FqWQJxkaigvhKcI%2B5cR7Q%2B%2FLVOZIk4WDeiI4WKVjwZVU8b%2BmsMVK1xOR0Wl2xG3%2FwTyRIu1BmTkoVrd53UjJ4KMzkWctdEx%2FGXU0RH6Br1PErCrtoITp8ZbRY03FnC3BXMcz2kQ2nS3LPPE7CuMDJJ%2FLYliwOg5HIHwdhucRGVMvm%2BCrabrAdOxZUujcXen5tY%2FSWbYzoViKvRjR%2FIxYuT3HIBZGAtkHrbJ28TAX4Bt0zz4TE8xvrUll7%2FsWavMj25XBigxZ9KfKokQ2NyEwO%2FyvO6mN6GPgqDCIu9oEEvsvTAxrJ8uxu7D1CVx9us%2B2JACxd8LJpWebIVB%2Fbt4DDpErdTBlA%2F1uE4VQcy2Wbdx5up%2FZPcH1UjW59SluEgVy2n7RROdHKrm6CmbaIw6CtQXbI%2FJQKYKnUM9LFYLARAryA3k3AN8r3xTRsM0fu%2BRd83nbX%2FDCe5ai%2FBjqkASBX7Wmi4n1gIPPCSf13VcmHVg1wgmEZqn6Nn7BtCsf6CKraeQohCm8ZQvd8x0TdrvumaoMOKBU0U3RewbIxLehPY77WVYPgcm2E2gsj9HpA9MWb87LLSETIYpee7W6U67ObHi%2FvpJG9VlCWoB10sZyyW2yiSZvQ31CsPfhz9YxACLcifhbcSOfINJjmWYWCdnfKjzHzoz%2FK1Q%2BBwXXxwBaNT%2FFc&X-Amz-Signature=b12978085659012ffdff056840c8ea0a074b3c5a0a62329b2365d332d9fe9852&X-Amz-SignedHeaders=host&x-id=GetObject)

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
