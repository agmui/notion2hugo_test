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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MS7APOZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmOQoBo9dxgUXeNN5MHH%2BC4xOqDQ8egpAzFaGfrdqUlAiEAl%2B0OfTOkE9lRbufcxEX4Mpy%2FmFJilAbtLkOAoDDvytcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDC4Xb414H2rnSG366SrcA6tBzgLYjExo4OUpIblVj5rar5wyxaRswH7ZhncDzY83dvpKExkcrA4eQQiV%2BZNNVfVKO09dyVYFSRK0IGCcX0Km1n7MRPwMEcdCcycntneUEJJHHzpkDciZL5ud6mS3E3NwphX%2B%2BLHVui%2FZuNjOl7L0Z3xdNcBW6eIPkr%2FHHDMaXd2qjVPqybAQO0xhZ%2F3D6ok%2FWGFy8Ba0k%2Bb5l1fIA6kQOheCtS1aYy6hENIEKLNM5OqAmsnvhjghLOnCN7nPBAzr0ZAWSwKFAmYbq7v66IJUKQcm1CtLN6BvWPkf5DHQ12cgA6SjdfdAN38btMVGy87jb%2BZzNpowU9vgQR6YfcTT0xdp%2B%2Fzg3OlQ37nBOd0BmaP7QkbHUv%2FPWjRUqUACPOR%2BSNQ9%2FkpuE%2Fw%2BANrUqwEjiJPUDzx6FqUYa9CcqufcDCxUxfByz5bSedLirD0UKDnH5MVKt732HuVMM1CP00S%2FW9zAZIyzQU0iYtxCbtboJyXbZGu%2Fv8Vg5%2Bc%2B9F8YTndAG41dlWivHhXxcCSSsz%2FZH6HZ%2F%2Fo%2Fid0%2FrFswe5sw%2Flcw0Khbc0D6rloa1mVVR2R5Io6E0HRH1RNAhOeBK05P%2B4HxZx5yxgWKUXYo92Bv9z5R3GizSsBHkqYFMN%2BE0b8GOqUBOMiwrDvfX4%2BjGFiZKhT5OXaK5sfxgwuiP7tQXCvO9iThLZYNcU6Vgr7jKeWD61mi2GV4a9YGX%2F3Bykgh%2B%2FQXKiwWd8P1Tg9Ld0z7UtxaiOn1wKoLVnu9C3Chk4pp3vPxuLDam%2FGNvSFlfr%2B%2Fu3hFyTy8K%2BhPB4iNZC%2Byp3JZdPEjTIiSkHHZipzgtgtG2G0mp9h%2BvPU%2BrYEbIzVtJ%2Fo1lfoxXxVv&X-Amz-Signature=958cfd87b8043c82d2982ce062dfe64dd85badd2c19cac46f4ada62a024ba449&X-Amz-SignedHeaders=host&x-id=GetObject)

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
