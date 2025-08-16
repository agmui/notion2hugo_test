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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ISCRJY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAY%2BpA7rzJPmLqGV%2Bf6PeLCSw4wSmermiOZfaC0git7dAiEA7kPq1uj2lUQiAG7T5e7MxrRdrVD7yQ79V3jBNYgkaSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJza1MtaUE1NvEZ%2BnircA%2FNAzSX8qeb4BuglIlaQSzrWk8FcGTHBnTO%2FxbcNg6j8xi44vc7dOYp2k%2FLW20XJHvbWuHrKWUEYeo26GN8nBWLONp0w%2Frg8srEgMOgwxrFFqJRt5qjfpGqOc267jNgFihEbNsT%2F6OpHWgxx9%2BpXE6nRrXHnfAV2AHUQdjL5i0AC0K5LhkCTLgX%2BAAPpDhM%2Bm537EgmEScArQZZwvpvzcAE%2FfZi6z0bybAmM8vjqLNYw0sPi1t8WR8yH7A0zQauizIe3jo0ugvXkYWlCU%2Fsk6PsDdo9rIXC6jO4e8Au%2B58aCx6g1ll5skUcn%2FzNnrCI%2FVh5YRpEOiKtfCT2PD3VUTfB7EaYLywJsvgtkLMMO%2BpgT10JpSKf3dFiolq35TYXAqmzVplyOVqDQV%2BP94v70w6YFmMXUXNHhNTdsIqz%2BHDl%2BJtNK8LN9Yx5%2Fi5hpnayUiDJvoLVjBxWzqJxxYbrfn0wsN%2FuWIhpKklCLswRMCMCrRqXE6n5aRwnc8k0ae%2BCaC2HmkfYyCVTotzahXWMnwLMeNLHoMrVCZT0EQe6OLMv4pYDA15PbqyOe2a5RragisbBsCH2SX%2BOhcJBSWRabrXGh6mHg1yAXtBQnw2tclnjWNlQkm1MYsIaXeWxzMJ2egsUGOqUBasXuESUFC1iPhK8hfaGrYGwBdloUBwxa3Dm%2FCEiUG1iDrXfnZNqRyDmJnDULax7cnRFZBAw3Q6dYvl2z6qFAZND1TszY495oiqNg4%2FDxVPukhQWDdIlYwyCNZvNk61z87k8nRB%2BN399ko%2BRPKC5ODd7JAPeTGjoxMoEjETM4Ek5HVTKzpDqW%2BLiipOeXIHkggYjrEdYAizSdZiz4vaijcaEuXzw4&X-Amz-Signature=d44050dec6a6df8edca9dc8e7aa2737aa43ab966f94a1a4271790f166466402f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
