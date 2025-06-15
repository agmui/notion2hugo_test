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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYDBJ2JS%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIH%2FX%2F6rck0Cu860kIfWEzb6ZZTJb1cNEPdhVYS4Jhq1YAiEAnSeScsoROVU3Ham%2B1tqW1RjHUbkNCCLIKXKaM7IqeXsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDC078QYL%2BIrXxZAmKircA%2BPNo%2B70t%2FIn8Z6RpX1mZOaXR4vHDX24Ty2rKRdMrz84GqEkdcTZ%2FscViHU5xurS7pDEjFlBsCzD5hJqUP7OdGW0796kVpaw1S3SoMBH2XepjCqNW%2FODnZ9%2F%2FPNiWogEM7ecGO64AoAdKzAMh6xokT6HEQTuF0ArqerJ7LYUPjCIIHUSQLxLYs5ySLHAoiDFvE63pNex4AHYBggAetJvjyz8B7syLlKtrsO7s11w0mZmxaLBbbbiUG8WD%2BDilgO00tds1d4kR0JnO6AlB60%2B2QWvT4HtrjkaCOB60Zm0OAo7X%2FS6htJvM3b%2Bzzs4An%2B%2BZXyIbwMqM36HDca07jSa2WRHu2FeAfZDlZEFTY8cG1Ev5kes68ZsU0s3SiGQZOm%2FZfxFk%2Bw1ym024e7fKlauMGIFJuSplynl8EAYtTIKvmE%2B1PxHiC1%2Fz2Y2HsBZDSP3edNzgu7Tl%2BJdKflW1jn0j8HGOnTistRmyn%2BYTusNUTZbsw03mSs4yFQyiF2q6Ikk62E7hrjHiYYZ0Mxi2iglq9Nc4I%2Bkks0Wm9e0iOQz8zW1N%2FgHVaVIGRiqBq%2FR83wNV0GrwQ1CWRhmYlui3%2FBeolsA3YNDGnpkF9cSb%2BvN72p%2BD%2Bn87a0ryf%2Bn5InUMLjOvMIGOqUBsjc7giXR27jWPetKsHJ5SX%2BqkZ%2B8l77XmCOAf3fszkVBaG2leJsUmZepBM6o5LvaMC1oMQWg093%2FiUldObiJy8ZB%2B7m7PdHIoEG6Bd3OhDbY85RMtAhLW3QQa20Q%2BQfduoOniHxfMqW%2FmdPzgO55ow9dKZMxVz3C%2FGSZIp8GUJ8xSmWR4kNsHA2ILivMbymeEKfe77KBuZfjZ4uj2l7fjZv1Urs9&X-Amz-Signature=32a7cd0597ad06acb5324f3280f81f77a807dbad33b81ee78071683c2b13edbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
