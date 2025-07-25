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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TZQ6GUI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD2NpFXItCIKcjtPX%2B9u%2BF169NsH1AsfU8S80ywAi3wFgIhAJSsnN0%2F53v4OX06fzjTFp2mBo3YxMa5fBdQ8n68REMuKv8DCEQQABoMNjM3NDIzMTgzODA1IgyhoYjPwy%2Fg1rqoXr4q3AO%2FP8VNL7E41T96ZI5eZV33InDDfkbxa3YfOOxDSmwNsPOnAigtX37wyGXwORO21d1MWhFs%2F4bWngBxyrNFbjJsvzStG6a9nSMgmBxhivTP5KBLOH6ENCb9UcY0TaMsJ3WzoFC8M9w5dXr%2BSB%2B3RCdZXC3DBOuRVClXsJc2uD52WDsV54htfel3xEpeW0SHgJHMN8YbglNuYfGcoZiGS1RYh23BXzs%2BWHy51brEdJvyMJ7BhljLAIc74YVGIG%2BcjScelPJFyd3YjGQpBCRLAmb7fu9gZ8PlzeG3hdPQ0tSJZoNXeGDQfBfm8bUYQCq7jfLPewTFbyaxiMKjqjEgoIG6pqziHMIVdN2JU0oszEBGXHAMpXLoRDzgu%2F1cmOd4XwzcqUd0k5W%2FEmLe7SYmA53%2FQeFaxDnIABBUjyWwMMtddMcALtqjPAmCqVyH6iST2TpwUiAuIYGp452%2FDzapEjz2B0NlyT1yxyjJRkW6K%2BTsKkq1W5TlrSOjW9EV62M4kjUpTW%2Ff3nVyXSfSLoGDj1TLFATlgeuU%2BwsnRt%2BuZhaNCQKbeu%2FTusLP%2FM1Nxn4Wt0I9pKe%2Bnh2754yHU5qZ7zmX8zBXkhjZzLlv6Mvg2FiqfC05Y45ZMCoukZGRNDDCvI3EBjqkAQwB8l%2FZRKGVTLfvp%2FGZ6yPWNEMFDCiO8PC1yg5XVcRfeEPF%2BUXF2xZtCX8LDAQq7KvxIOYNTjoOk0C1ImYu0Nb%2FlB%2BY74VDsoSFnVEQvSB2jt71Ui1sn3jrpzKMj%2FSCoGiy3ls1kkjNbiIGLLd0ybrhkdjwAGPGtUDI0O3clq%2Bwl1%2B%2Fv5rK6eGQPo3q1TprlNdkgij9oCDnGoGT3qVreDOPzQiA&X-Amz-Signature=fe215cd8bbcd7f69ed7e900f999c947b670205f19755a1e061277a290948660e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
