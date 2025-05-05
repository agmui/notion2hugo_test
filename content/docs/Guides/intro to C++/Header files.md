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
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GWX66S3%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhwvY3B3iPrIK8qPNav4fdyJAAMR5%2FVLsyPKukcNBjeAiB0sIdyXSIh7QSEz%2BFdiXt8BjU%2F310H98ILlMoo9Fq6%2FCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM4AJRhBBFa7HMUy2zKtwDKKBTugNtQIBDAr0QFBlGsMTnBPnovUu0dGr5lCi9JiZtJzkOxa1d1Ed3hVG8%2BIf6osa3ZhQvdBlyG%2F%2Bc7SawmKq7uT918rIq9KXi0PDI5hxRkGV90p3319aC4C%2BvCbRhylQSs0H5XXHXvQ5thB3bhJObDKtMydWyltpTEgPhpRM9nbgsoAHB%2FgapGRNqeg7iuAL1lslTargsELCsErCMrrsz25oZX5bHvzt%2F5hz6lvzddT4ZpU8cneGQv0DUDs6elq9SI2D4jhQKs4DVeJGASQFGTmCFZFB2TnAdtnx5w2A0GrZ7JlO8jcsh1zrztqosDGFLZ6aE5Kgkl9YdZUZvEYOgnSgbiKr5AR6sT%2B8P6shx5nJ2rMDcYPBgthxMPhyV%2FtdLfY9UA07H2gvov8uCkHrE7dBAg8vEwyvhOLnYo0llDL5FT2VAIUpZkDXcxzdNziSwqI4wKleViqu%2FqfswWB1ZGN%2FjBymZs4pvk%2FvZGhkAZR7bDAMQV%2BIxggIyvJBFjCqdZdDvIvmSKOl543RmfkgSV%2FhbmHIVC6UHrWsSitzuCqP25EfQfBXFqMLiJQ7tLo%2Be%2FJdQ5k2GGW%2ByYCq0ZQyBOck2f6JfD%2F8R6HqbATOHyLkpTE10Q%2FMvIjswtNHjwAY6pgEXvjZQ60zZ1SXyXQbllG84SU873f6dn41MuwAgLayQgGSFM%2FDLIxaym9toDQTkBIEc5sQj9CMOngi8gZiNrqgvPC3N3JIAPmZ66Oq2ikJHTF%2BTWQ75xn2lF4gapcMbH8OEgsH06Ky2sTLcRNh5m%2BtGZHWGPoFIUgH%2BcEwKBjHiFo0d1kChGqdFEvZB1FLIXsIVjETNSCxO35avZwpryY4hsz3EqJLu&X-Amz-Signature=139e6786471a44374d07595c9b8b9bdf093b5ecd64113814475d8b7d5adbce58&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
