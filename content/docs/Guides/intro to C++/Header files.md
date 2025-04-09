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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677VMEH3E%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEMDFRcodCrM4RyfpOn6d1hJAmQvdiVdytGHNOs9%2BY5xAiEA%2FaGI5rmslXNY53cbIMV1qWo9W8QhdN6K0eU89K6XdkYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjPX%2FX0VeaiNS3dAyrcAwsNb3yTprrYByT0HE314dW7eXCjMKxqkYTXMqPvppZp%2F70Sgo6H0PiMZzlmE0dU7pFwoiSIJFDCfFsDx97ulzH10uFk5AUSk5%2B%2FO58AknMsajjQzbX9o3KtJPDWSu7LOVzGCVhDm0cYKF2y%2BQpMNqhGXhYVtmRCdNy6gbmus5pbU5Y8GoW4j8NOfoji3IaWVLvjN%2B6jQJYNRk6Wsn2TwB%2Fnt2ao6fYSSzlxHd9VseJYHHWB9Q9Ge6SpzJypDPgAKHgly9kCFjhZ51ebPkCgT5icWoSjQznFoIvakQ5pYIa28AhKZieGcuOSnIkJwKtryrlvyN2hLEdQG61cMjJynUrTqRvt%2BvQemBtoqQWWA0Ej3sWT6%2F2o7nuRtT4mbOHKs%2BshdArChe7DOknD87rQxrJrqw3UfgmvANOYqZwWp38pPdtePKY%2FXovIU48q%2FtHOoW2IhNmq5ys5zmR3nq8pfRM%2BpW2QKgBiMcZ4jdBz%2BOJRn34DXfVrsi7gnvPKPOARUYuxzvN6q3Od7NmHK%2FyeK2%2FMk%2BB9THkpzLjvFqkv%2FIzuE026uVQlWvAPDNghO5muTvmsTUB7ZnNsgY0aIM99DRpy7ocEl0H4dxX8SUvM1NFuGCOEFnxNTDOfs2urMN%2By2b8GOqUBTx%2BMJ1aVmwkcgX8IUmBaW%2FQPWK2mHvOJMbIubez0kgas2tSEHOEI%2BBbhovpGAl6ITLkj2t6suhqxYoDYxeoxjunPmwrIqa%2BD5IF%2Fqk%2BU0jsh2SQTXaG9q%2FVttZjHC3x9Z91RGFV%2FElf15qgMjJrtxbiGDWYI0hfSmzkael3mp%2BvbjE2u954Ar39Fjy7GjluqtqvJ%2FkHMJyB5mgcLwWAS6c2AZ48F&X-Amz-Signature=a23f0239d298c693d4f7d976c70ee6d589828c46d135d0ec65eab77fb40b115d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
