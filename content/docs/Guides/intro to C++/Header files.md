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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654L7G33I%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR4GD%2B7Mcqt2G8FGIaKE6lRpAsp91vBb%2F5CB6r5weaIAIgGstmx1gVrJ0PraY9CVQ85FLVk1Rq4jnDhV9GUXh5I5kqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCDsPYlTwB6TAZeTCrcA37ybN5ILtYspzShnuSX8s%2Bdgb08F2eKSU6SAMEUKAi4%2FkJjCqg3j5ZMtLnwUYjjNjJ6S8li9XtkMRJWYFE2WxFr4rpD8h8lXVdpo3by0ZSLsEgrr5SuwIg6Ys3IaV1MK5GhmosFKsB1Tpb%2BSlKNYDdAwi2jlHEhHKfRwpYhJIwvFhTPGj93V8w3qnCH3H5ZiKvtklp7skkGKjav2nj4KspQLTjX%2BMRUL0NLi1MnCoypFjdJjmWyDQWVt%2BDt%2BSja7Hb7WCeHvrlHYVzdcZ9IeRsVro2uuAJ7J83glgb0d1IP94R%2BDWifjWKtswOZ1RZST652F5hZ5onrEav%2BL%2FRgpE0fKu2aFCmg%2F2%2BLpFOowXftzVPr5Ok5X3Co3H0HKCTxjC8XxHLgjRh1MZ4fWnoGj3HXPCwlPwdIOn7cKtZ71Y%2BbL9%2F0TdwP4Q27UcP0kHRdB4rYxFjCoUkesr1hsAj5NCqnEUMYA17MZTDcT%2BFOVIAIVhDglszJPfiLOlwQA1LPTZIyL4fE4ghvpLGI97Cn5fS5oW7sxEBs6gNmoERGI9B8sVvael8jCNRgZLzuTvl28yZku9asZjiupV0Lc6vlmopAsrJ9Vhk8NOmRa2IwOkAclyllqG%2BghSk5x20iMIrznsUGOqUBMbYi2RZHYyGVJHp0l2sdd8V32VFDSkkahD57A1Czn67FpxqYw%2FmP9B5R9bD3KELE1keVYEL3CALYTEi20UyQgQu9aTTHI%2BmNOCmi5Jrk6MwxitRoGMQIj95zVdtgopzf%2FFFJCRzPcK7qZZPWHQBHNak6MCb4gqgjkEFRxkfFWwZZ0ncvcW%2FFn%2FEWgdf2hygno1wUiOsKFun5j11rIpVatwBdrzbr&X-Amz-Signature=5389cb52dffb1b8a7a462fe0aa05569507b3c894767833b713c8dd94298487ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
