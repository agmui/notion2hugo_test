---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

</details>



`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNBWCYVB%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfzJ9u2J3eeBwwA2nAXzhdHgrNHXZvlqmOhFgTK1I0cAiEAwCgixbpg5j2hc79nyFOYQvkNB%2FDzLHl0G7y58qWrC2kqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf5nIgwHsfFSmI%2BiircA9qszERE2w5%2B6uZROm69IBeiwH1FeH5%2F1ez%2FRruwr0GWn7SdnT5K%2FTYjAMFerp65O%2BB3Rn87AZXmm3uR%2FBY8RGn5kB7Sh32hULrHNZlf5thGL1TAhD4GNK6Qmu4EBeqFzHTboS9Haj792Z8Hx5RBYpQiGfqnQXQlnOek6OsJQFuK7GQf8AvE6EtQ3hsYnZxw4tYnH14VQ96RoMp7DW9rl5Uso3eu4ipCsdA1OmUn66VFqM12Q29buQrBFK7oJEvlQig%2FO46kMBiV%2B1Lc4NzWwU90DznZt6BbnGzvhYsTjUr5HDBDfCaqLTKJSG9vCWyH%2B2BW2yaSMqf2YUp8O6T7XMu7F0eb4vMqy0dvQvOM0ve53p9AOkqXi%2FFc1%2FijjpD9AScmZDu0CrnNPdQNN0Fu3XPYx%2B29zr2d2UjXw0rymj6I8n%2F%2F6yW%2FC5K2fTY3yT%2FieiKSKwM4WHY7Ux4Kf03IjjdNAWzAlTyRs2ZODl8zrvjRsFSUs6R2ko6giPJwnJe7x4N9p7dBlyFyYAdJg7l%2BtsdS2XxlcISeXyaQImarwXt0eftxHkQXEKa%2F89VvNNZ0VKRLVf9r9S41JYWmlXlIgWWl%2F65BEI%2B46eOnuVbUdExNDMXwHDzpJp8Fe%2BRLMOCzxscGOqUBODzI5XsinHaeAXxhUi%2FJ334ObNwnPaYyHDRGsIyAMBBThjfZv7TcumBiHfRmjLu0iOdQHTVOmyxuNggrFhwou0ea1efbnTL%2FkkrExakqdxHzsLMBaBfs9qCj2FahMWbwSEYTgoZsr2mASntCH7ikmFJsvHdNE1fBgcg%2B1sI%2FepnmHv5Owsy5HSqXZKAYiZaZCAlwDMkf9v87Jtkbyt9kq8HK3ATx&X-Amz-Signature=9d308d2956f220dee48d78039275c056b1b9c616c5ed1f099776404786a8f99b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
