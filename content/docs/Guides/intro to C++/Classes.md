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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVKHGBRQ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCUIjfckW4%2FGxOHAWxq66508j5yU9opiw%2B5GdtjVBMNawIhAPaDXjxFG0wjrviy3MHVgtzk8fsHQBymNK2Kf6XNErdJKv8DCC8QABoMNjM3NDIzMTgzODA1IgyiBhSOkuRq6Wia%2FWsq3AOt05M44Ndc7xoY4bsl%2BVqOh4EHOBtdIBinRg0T4npyLSmhu07yiZ3sxLmnJ02OX%2BuXHTNxzfG19Q6STo5TINgiNMOKDZZ7KUNBphYMe4oGBoX7DOX0TMa%2BjX3QpFihBvlEq7pZ1SNVAoIFIemaQY7mbDIIo0nJrvQF240DKf4sKmNZ2SaeK6DbgPq3g0CNv9PSglDQ%2BtBM4iWLZBSpT%2FwYwt21xKsQHOMEGAndssWIDiKIK4qHn5MzBcvmMAFgUMY53Wu44x1SBUKsUt6WoTaqDBxclPkzNk6wd%2FGAT4d0s4i6CbyOAdneZS4%2BphjTlQK%2BXZZv74FdLOyPLHFeWdWiQ%2FsYun%2FQvHEkNNTF%2B317%2BVNYF98q%2FuXNEClezx7fw1h%2BmaTN%2F9VrpxTUPWXOGOlKhhGpaiXvr8jrCPHZbM%2BORoq4eMIaGr9IcF8pPAf4A8HsLMo7aN7h%2F5XdzPG5R9q69SXU8%2Fp2IJGJIG7ZUsBn5tQhkm0h9iMcwzJM9Fhqd1tj1umE2gnKmhUGsURKNdZKBAGU1hwHeq1nkdTDqoJjA8Qbh%2BNhscxQPjr63L4vkrjhthinx0ryqTC0xcxxf5jCGr5MLXYDzpshMSOxr%2FLdmRrUj7VosyVApdlxljC%2F3OrCBjqkAadFZgrVVg4jhO3a9fqDTjaZGWBbyd6F37iSy%2BUgGDNFBQpsAlvv6eIpEKG8GcMX%2FtumTDIWP%2FsDjxZR2SAFyKYnWR9UvVMIQr7D3q%2BPFVZhOSOsjRP1keiKnEXrld3ZO1e3%2FNqgEV8V46WZyj7QNXf%2FJOtNBxE%2BNY394umktOiMj5Rxk0%2F%2FyWi2x%2BRgk92AKs0OVuTC1Mjh9FVtjnSRH8BxHP6e&X-Amz-Signature=9069f3a3e737287cf69437e06bb2f2c8f2c7231361994b9f7bfff8968be746f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
