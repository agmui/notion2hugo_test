---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAR6AIOZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQ2JdARNhFFzWLTRIlrYNTQwevlifg4Gc1%2FL6Uiu0xYAiEA7wVUT6IAe0%2FfVeolQpD2Nk0opgvTtPTksEdYuOInYEkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1qNNkGcfk46IWZjircAxMR15XpULbWCfCB41uQ%2BIeFHp%2FGTSkfQDsDTaCcRkhrMEwpLE7JTxIYfGDU9hibdwmaf9%2BiH35NfYtAHE9jhFrgAoD5WPjZ%2FRYB%2BCiU7nzJLZMk%2BXb%2FFJJwbd%2F68Voz%2FBBi4g%2BNJRuisIcFRNAXR1qNynnIdj2oAe6Y5xEkWTpwOHd7ZDVn5KBhH2SjiQHKXTgPpoFWR5joXI%2BS%2Fr6SD9CU1jWPdjECftC7Ps5%2BkloD9mTzj0se7ZQh1%2FZjDpVHJJZHQQ8%2FSz2A6M9qirgIJOb4%2BV%2Fra%2F5WZzeRivYQ6apBnwtZP%2B%2BC81gwj0t8Eg%2BP0YCrkLP1oz%2B5tgaYx9fZy81LoojcR2agUyqHM01ZC0rlUHjS2g8AYRaM9ciHDGrBLgMlc5OnkECnv8KV2FRVudFTV0q8%2FJMOSMsai0hBafB7Cf5AsEZeWNDWt7%2FSqeOWVMi2DTJYKr10wjBgI5SUf5kkoBF6z9go8N%2FANYyGGfR5GjYwJ33QCI6ZaUmxuGLxZl2bXBlEaWCJr3MT7tA3O%2FkXzwsBQvKujrdc%2BOiltPHMA2sLsl8OBbCEBIvvmegQxY1iWljc9%2BZ3Kmus7DtMU3%2BPExf2O4CQTfqmrO9BkkM%2ByL3v0vvXxRmyggZ2MLyKgMMGOqUBzGaMqatiwz4MmfBzWNUzg7zgrj1GhGlUUxPOu%2Bl8ct%2BmrgAL4dXCmD9jcSO4TJhNEH1kfbXRSITVWesjWIO1Joqpc%2BRTpwGkEU9cFLqS5ydYWGZQcQL8BBTMx%2BDZUCYikeSf4GpO2eoCrnmPF5vjBS1OlCuIvjpnOwvRlehktrfuUOrI%2BXpTod0e09AurAWjLSZGPM1QJ0sop2auD0esUor0t6mh&X-Amz-Signature=0e7e7da7b7044041fd91f9efa040729d1773cdcae71bd0f8c95cbb3da56cc581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAR6AIOZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQ2JdARNhFFzWLTRIlrYNTQwevlifg4Gc1%2FL6Uiu0xYAiEA7wVUT6IAe0%2FfVeolQpD2Nk0opgvTtPTksEdYuOInYEkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1qNNkGcfk46IWZjircAxMR15XpULbWCfCB41uQ%2BIeFHp%2FGTSkfQDsDTaCcRkhrMEwpLE7JTxIYfGDU9hibdwmaf9%2BiH35NfYtAHE9jhFrgAoD5WPjZ%2FRYB%2BCiU7nzJLZMk%2BXb%2FFJJwbd%2F68Voz%2FBBi4g%2BNJRuisIcFRNAXR1qNynnIdj2oAe6Y5xEkWTpwOHd7ZDVn5KBhH2SjiQHKXTgPpoFWR5joXI%2BS%2Fr6SD9CU1jWPdjECftC7Ps5%2BkloD9mTzj0se7ZQh1%2FZjDpVHJJZHQQ8%2FSz2A6M9qirgIJOb4%2BV%2Fra%2F5WZzeRivYQ6apBnwtZP%2B%2BC81gwj0t8Eg%2BP0YCrkLP1oz%2B5tgaYx9fZy81LoojcR2agUyqHM01ZC0rlUHjS2g8AYRaM9ciHDGrBLgMlc5OnkECnv8KV2FRVudFTV0q8%2FJMOSMsai0hBafB7Cf5AsEZeWNDWt7%2FSqeOWVMi2DTJYKr10wjBgI5SUf5kkoBF6z9go8N%2FANYyGGfR5GjYwJ33QCI6ZaUmxuGLxZl2bXBlEaWCJr3MT7tA3O%2FkXzwsBQvKujrdc%2BOiltPHMA2sLsl8OBbCEBIvvmegQxY1iWljc9%2BZ3Kmus7DtMU3%2BPExf2O4CQTfqmrO9BkkM%2ByL3v0vvXxRmyggZ2MLyKgMMGOqUBzGaMqatiwz4MmfBzWNUzg7zgrj1GhGlUUxPOu%2Bl8ct%2BmrgAL4dXCmD9jcSO4TJhNEH1kfbXRSITVWesjWIO1Joqpc%2BRTpwGkEU9cFLqS5ydYWGZQcQL8BBTMx%2BDZUCYikeSf4GpO2eoCrnmPF5vjBS1OlCuIvjpnOwvRlehktrfuUOrI%2BXpTod0e09AurAWjLSZGPM1QJ0sop2auD0esUor0t6mh&X-Amz-Signature=4f4fe809ba6d0294e12727b737c08d70a96024aa461acbb481029425e5feedd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
