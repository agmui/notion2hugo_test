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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFQIX7GV%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCSVc8GajQIsbFNndrM8IDq7j1zK9Gac5iFzDi3ve4%2FMwIhAIbkVIl8C9I004Sm9fGpsyQdJKk0xarIrmzWmFe4Cvn%2BKv8DCCIQABoMNjM3NDIzMTgzODA1IgxUmJlws43Wmnjpbjgq3ANuoSmlM4%2BZJoEC4Pz0BdvfrNwaPkfrc%2B6O%2ByQhOaUenoundjQI6BXrK1oOXroAR84gyt4SV%2FGdgP%2FMBU3N415yPA5jVkpxSWuh1F6jTBDv%2Fl7iVE%2FBlP%2Bjz9eLqPO8LIrmLiRQyCXhWn1fHos9n4Y8slo9qf3FH0peUrI4Xxfcaxy1tEp41Q%2FLFfE2Zdqd5HlW42vm4vm4hNcsj5%2FC6fUM3VtsJICBJVSwFUjWyoQqeXP4PcOxzEHaZKZudv9oJ4wUOtjmYck5Jo36Gjz7b8%2BKh15qTOiHNIY31ZN9q5Z9P%2FUJP6mmbfo7hBqtegk8SPCTgGKJssLLdagyDo4upyV3p2WX%2BJmFGFrrwp4eRqZZwBs0gX7tqQeV1OucnVHW0So79l0W06Dc8KdV3I09mbPeziZNzT4b%2FNhmDi%2F0WX%2BpydT2jrux8ljkhX1BbSUGid1ftEgFq0cHr0Z8b2IM%2F51gb1rG7vPk5WLQHz5aqt5FKS%2B%2FS%2B%2FhvWGEazdytuYoG8BP4KVhV5NafAvHQyidyUpw6GO%2F%2F1W%2Fa8AUGFh70mWl5KMVTrIAHP8Gm2fVsELM8FOLF%2FQH3KKvdVR6b0Yqe3oS9E8Nf2SGT0%2BzeNNnQllgpbwT5rMn%2BWxOXbGGmDDXzo%2FMBjqkASuFvduOqK8CrGnMvGXD9e591r7tIjtVlkWw91IiAOBF9hINNDMZccf%2FobjE%2B2UWLGdKvAs3wnoD%2F6I6twYwA77%2B4pkGHw8wwbIug30WtNcgj2b3gfO3baFzqE9BhymrMo7XxFOchCqWOKRHOxTLsIks5fdXRmZ%2BTulFYKjR402t65F5eTBbS9UzmdtNbDuU0y%2FZB%2BbuJnFF%2FMYxH1EDSwvejHrO&X-Amz-Signature=00a1703c011b8fbd27767716d44045428b72ae48e21bc308d916e5e1a9718485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
