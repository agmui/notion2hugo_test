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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDFNHGTZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2Sf3S%2BzXAD7xUdG%2FizdajDAfb2eMpujd8vEdVLbqGHAiEA5vWhCcWyTROVyJaLieNYMc7Fzpv%2FON3V3GcmQQNo7S0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkEDbDWzSvqJDdyDSrcA5CAgXg%2BAQpJ%2BlS0fY0Sy%2BkEnWPaT7u7UH5dFYe07bkpJ%2BzvC6pYT8Vuat6e9r3i0x4vN7WI6h0VH2nw4R6L%2FvHzJ1%2B0r8NNfdHNapC7Ys3VYIQcQ4R8eX6Gvd32nziclFNb9FmsCRu9lu2kaAkcc20uJXcdbxBRsNuEKQ3P66Z9L%2Fdbdx%2FK%2ByGVp%2BXaxqBW3yhqjAGqhQUD5hNSiLLF5EKnqNtR8%2BuKk72j4wkLLzuWzF4TF6hYgxg0XN4a2QOTAm%2BDxQz6UUy9sdly6I3B7n2CIBNVyHKVmFSVnbpFiR4ICnPzb1nGmFdESzGLO2w6wLF0MbhyBVx7wJkGQgptDeOGfQsKC21Azje23qm0bzb0YJxGAUPqlZR6LI2VCOaBmp%2B7Pzn0QHhKDKiJD7NUpphkYBRaMBVzjya0wjysDvd%2FV7Y7kIvDM2pFjDiWbe5JgJ55jSakmSDnlkYF%2FrULy6dl3UbfCbLwl%2BRV5vTwfFPCOTAXlDGR4edSi6qO9ePYT7F7ZTuxfemB1SO8aW2YQPSZdUyhb%2B%2Be7hSGCWKhQYew9jBLGKYPyHzi4VW2NcKI18qO09OzVWCGLJt2bF%2FDHW17n4mjcUw6N8qx4bqSDKeBL%2FUQGbONe0sSvsHUMJWG0L4GOqUBHKagx7rTmj%2FNh%2FBSmiUm9afIVaebCS%2FB7GbSPGueDu4BcR38aZVw999Zoi5PSlW1XGXyUDH%2Bnxj6A6KfMaG3J4ufSQqhTYUc9LZWcLw0jmzwZB9Nare%2FLNRGykFHwTeL4VMM7nAzHLbL3P4p3yonRTGKodHTt9nVUTcfgNN00bI%2BaYDx0%2B9Pd0ZuSWLF2SFyth%2FgYrjMY10mir1ljEIu0%2BMCHhD4&X-Amz-Signature=a87237852c3acfe3c5f0933d2ead7eb6089a9e8b7b8adea28a5c1aa81cfc6239&X-Amz-SignedHeaders=host&x-id=GetObject)

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
