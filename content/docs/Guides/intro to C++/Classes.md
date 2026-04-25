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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665TRAP4D%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXTDpxSimSKzeiCndNLUkXTFI%2FA1KNDWNCTaIl71UcBgIhAKsqkjuUj8n7hHTJ7XJXX99VblRaIzCGStEINDuXQOf3KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw8dcWJwejDQ0g%2BQwq3AMK31Fsdh0jqVkF5d695eV5bEyuLs99spVa5aPfQMpiMhiFbwVMrhHpaLt49%2Bds6qrmNEgPHkRqLKg7n4Qo%2B69LLLXIynn2itOo%2FESIIyLa%2FgZI8C285MkI%2F8VuhO9uOAyOgQ8YFDznP7x6gnWR1allr9lk4QtD32mW8wOc%2BNm7IL%2BKo1jha2XW58LERbdAvAj2Ug%2BSyGARHbfz0xEQr7X%2Blnam8Ho7wPEHJEWnErAAkGvxXx8hYwrIZeduout4B4rViuxr2atKIZjQpPOpSN8ApbXCDHgqOQk4ZBV1QQsPZ2rlw3z28y%2F9rvdxRSHewVDXt0OvXZ37qQ%2BmOlWtFKl3NBiwze1rvGJibmmgTL1LHMy2YSZsckvELvOiLcdS30TJKwZQ0GXcENF1G8wMLeLx50Xwxv3rFzI56Gi8IBAWuFlYNDS2uxtijvKtQJInU2%2Bofu%2Ftdwl4qTthQKl1GHWXA9Moh1%2Bmj3vaitad5Z%2FgDuVxcnAl5kDBSAZ5dJNd836DBaVROxWra5KHkr6N37BQfVKM3zQCRJ3BO%2FaUW5ZlG2SHm5Vs67yukQsyk7mjYQVZEnw%2B8xMJ9XsvDLY3IlsMkxa2m%2FVLJDMTQ1Gxv9k866TctOyej6Q287swdzDqurDPBjqkASHG%2BbEFV5t2t61%2Ftl3pqUqw1UCZvsSJ217ThnaKOxRhxyyp0yn%2Fvv76Pcp0nsneKRFpQC%2Fsc54%2FW8x9MqCJDJpGzFRFnN70e%2FxSWoYNDjd3SM4X%2F6arZQ3DgGq47Ep9mnxIq0e%2FgJl1ehAnCEeC6d%2FaqamIcsrxXLl2U1nfqvr7LBfcvaLkGyDDap8jqb8ZGKuh6GMeMmuYgAZ9WffZYA%2BfUbWV&X-Amz-Signature=58d531309c8d40fb05e5c3f89c1cc49ea4ae55a2a91b1942b0c9099a1e9f9ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
