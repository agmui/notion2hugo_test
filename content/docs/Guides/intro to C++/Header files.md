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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDBFYDEF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIDDlSJV2FrYa7L004r2bBbIiOXm%2BHMDFMoHSv9pv1HsOAiEArYXtL7WF6Cc1xT83U%2B5EfGXDvFrgMBprREVRZh0Wjx0qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGPunXp00VcpnNXdyrcA%2FGlIM6stjN0z54NSHyixai5uU8en4Lm5EWOsLtfGyGeAec9k9FlOH5H5aA6nF5WlFDbprY%2BaRFUcfcvTak2JeILC3%2FS%2F9hRVnvWWzKxfnny6jUykwo%2FWvSaU%2Bg1FKP4TTyvqlCR9ypSvh8ubqIDW0c6oYnMYKgMNF23mgvhF5PCFZyTlScB5P6Zet1hJwoO%2FqBtfc0scyCQ76vib44%2BN4mmUh4aB3Z2DAQt5nwJYQta53vSxEJa86yB%2BlTZDxpso090o5rzJzf471cu%2FDBXLIjOXsRzC7Z5AAVLtBoW%2Fr%2BtxSKn3SCm3sPOaFySm%2By%2BpvzQf98c2NuCJLTGZt3bXU2INqF1nmyQLoNbawN2UKv%2BXkIkNpxKwQm6ksam3qDH38k8%2BddZKrGxZ%2Bv6IjHCp7KGIcPrB7B2OERIvJ6YTJhZn7Kgci9MZuZor2SR124CYaSnNbnMQyL%2FOLwWiHA3jC7IMK9IPsWg6cKr25ER2qMCKzkEWTXQBWgMEgBX%2Fe2m%2FcoWQuvJhGBc%2FEEB%2BjgZ11Xh4WyWmkY9QaUjctpruerhvIPrRQfw03O%2BnnJ73clY9z6gOPFVSv%2FrcNevjbsgsiSi2eocUDpk2OL378dsegI6G%2B98Y3owPtn4CCIgMIGPicEGOqUBhTvnOSZcgrGuNvIpBoV175TlHlVnl2%2FV9m8UIehmn%2FupIk3Y8txpkdQcoLf%2FhGeYzVf6XXzYVgSwfPflJMS%2F7IyB9KhzK5%2BuLljJUqYa%2Fnbo5hvFGBWVLAMeYmjmijj6%2FgSWfOwZhctkNl7cJHczcWX67LzaKZAQnCK%2BSqaxH8%2FYpSVWNCfRAYUaSXzKFAFxFzG0wSnEZaObQ6RxvKQIT%2BXggHVI&X-Amz-Signature=8d88e6d3e8488e379a4ba36b9afffd80549dc7c4a472c9d6fb06518d132c49d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
