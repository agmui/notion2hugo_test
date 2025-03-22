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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV74OHCN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDOcLfDnsg%2Bx0TdSe5rGvYo81BFfdbkKnjUjGmN3UhMbgIgZot2d%2Bmc%2FeXt%2BWqIeiKhgPrvba4llWC1L7hxVWpS%2FCgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP32t5ZAmckYrHrD5yrcA9fhJmsGZB2MQ%2BvC248ojFZvlQXE4AoUMVf4GDR5fVHzK7CDB2kvszjahXM5VB5sobcjfGu1AGq8bGcoN78OqDNQ7RgaHfMP99BWD3tDSYh5G%2Fp3IKo9xc7VBIvdOkeLEMU3cmHr2EmtD2rvja7hsA7%2Fx1OS08g%2BsEenl%2B%2FbR%2BWHYVUmfbV4Q9FwG0h%2FRInI%2BQapi%2FmwpeGCo7D6akRW0tk5%2BpwWYRN563fl6NDOtf%2BfNyhIaiDB3aNqNkNbpP2EsEnug1dGRG9huT02Zo2ZZakMwO%2Bpr7QTtrVXgrx0K7DMfKg4m3NBjdPCGQ7urkj0WU3wavLG4TTqkmlwLMRB6mEALaYRIPmp9m4L%2BhFkNg602ZFd0dn7BgmzFl7VVB2hhNIM%2F4Y2SXscPSXYF61JkYf8pVnZ6jo41u6OF4TDThSwimOqTzvzcLKFMfnt2dq8fPDJCGjBgfDE3K8hM5lnEzungNqNr5u4sQkr3L59iFQekYPTlL4G2bjyTT6Nlxd6Bvr%2FXy%2BbJPg02SENtT9zYoE0YHf016xgdYiJqb1SfuMRXtYZ5%2BFxC%2BPjMAKb8agRlbEP52QwCzBvxQjvQccU5Vm6I9Ws2dTKNApWtbS0xW1%2Bbe0vRlY7wTiEQLEEMM2r%2Bb4GOqUBrrp74vgX%2BBl%2BwDt%2BlaBmTAj0Z8n%2FTkYqg7ZBCZyWxW33EsmvW1WEiIlYjpsoH2Nx%2BEAlzkLwk1Kxy9UMSrNzbpejccFfsucWqqcW3E%2FjseGB8%2B5gqMxYx3XuJhWag5whusNK8pMjhknNFV%2ByFTse7w4k%2BvM2IdakDtFrokA14si63Hq2ZlPARzAzBXGDEpysbQvcMhzU2r1uQ5NgKcNYl370zY2C&X-Amz-Signature=661b9bae7f6aac52a175c90473c9d6b2095e3a3dd3c270f7c937007d9fcfb779&X-Amz-SignedHeaders=host&x-id=GetObject)

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
