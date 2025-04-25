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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HUYON53%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAWcLHtfTe0adYUFGEZ1CueLBxxKTvWn1a9kYeRHnCaAiEAxtkrVfTpT9Bbj6Z7o5wA0g51nJwASzTx8KsgXSMk6RQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOSG4BOorUNc9ZZaHCrcA%2BWkR0tZgO6Kq2vVZ64TFqJ%2BzsK6dChtOLSyiXPhNYKj0%2B7njnQvVHGWBJeFzmrxRJ1PQZfVDCxtss3W0S7OUUQ1zUS%2FCXecUYcO95X%2ByP3AmNLMcow6%2FEXUv5PsdjnLxBM3YsR3od7UlplSQ1HaMm0bC5YEvItQVnXK1heCUXBvQ166becZsh%2Bu%2BpFs2Y3utiaCtOIVjUqJynIrEhnl%2B117LKzp9rYi8VHKu2UtJqPTq9lpJCeC26OVAK9JrBzyoR9ZkulJk%2FNvjsuI1h0fytAq1DGTq23OnnI3CpTrfiE7iLjjMC42RN%2BLTFU87pUDNl7KF5Et8vHQ1YLIRSzn2z6qrQal%2BBG8rFQ4%2BDId%2B5Zg5QIRly%2BSj%2Fn9q3er4VFTK7GuAfW0jt%2Ff9GR5dG1nlkX%2BBdp7Rpyyh%2BOzS5Eka9wSrWhbAOytpoubkdaKUtGqpcDJBNPI4Fm2fHnlZQsQOgz1sNrnBb9gfcStWL4Bu23%2BYy2KbJqJgzg7tg2j7NvN2iiCLHKNkvK35gRmdhRZzoS%2FiWmnORXJJt2cHR14e0I9hpk1LYvmAJEhfjxAQRpEav84GX1HlilpsiWXIkQwtAm8zo1n7ovLQij4PQ2FocJ1iG3tK%2FxE8XmiTYdHMPj5q8AGOqUBCIC0rMnJmmnEC%2B8hnLriox9l9vdoQD9Pej2mebAnSbi2kNiqQYNQXMeWWO%2FShqiDTXV1nzyeRtRfd%2BLuLQteSfyRjcinXAtsz8bH89Ln4wBcdcoa9%2FAPviZsKiEWSKFwmyg%2FtIBeSR2tOFWFa70eU2yXNIeNkTnDu8H0LcAYsoeRC6%2BIr3Y996ffPxbQXMPFH7GjlQX7ZVxDJf35Iu4MmZc%2F6Tg0&X-Amz-Signature=af8283d4af9c9481a97289e3956e2c6169656c9b2def8ec31d8acf1596065148&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HUYON53%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAWcLHtfTe0adYUFGEZ1CueLBxxKTvWn1a9kYeRHnCaAiEAxtkrVfTpT9Bbj6Z7o5wA0g51nJwASzTx8KsgXSMk6RQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOSG4BOorUNc9ZZaHCrcA%2BWkR0tZgO6Kq2vVZ64TFqJ%2BzsK6dChtOLSyiXPhNYKj0%2B7njnQvVHGWBJeFzmrxRJ1PQZfVDCxtss3W0S7OUUQ1zUS%2FCXecUYcO95X%2ByP3AmNLMcow6%2FEXUv5PsdjnLxBM3YsR3od7UlplSQ1HaMm0bC5YEvItQVnXK1heCUXBvQ166becZsh%2Bu%2BpFs2Y3utiaCtOIVjUqJynIrEhnl%2B117LKzp9rYi8VHKu2UtJqPTq9lpJCeC26OVAK9JrBzyoR9ZkulJk%2FNvjsuI1h0fytAq1DGTq23OnnI3CpTrfiE7iLjjMC42RN%2BLTFU87pUDNl7KF5Et8vHQ1YLIRSzn2z6qrQal%2BBG8rFQ4%2BDId%2B5Zg5QIRly%2BSj%2Fn9q3er4VFTK7GuAfW0jt%2Ff9GR5dG1nlkX%2BBdp7Rpyyh%2BOzS5Eka9wSrWhbAOytpoubkdaKUtGqpcDJBNPI4Fm2fHnlZQsQOgz1sNrnBb9gfcStWL4Bu23%2BYy2KbJqJgzg7tg2j7NvN2iiCLHKNkvK35gRmdhRZzoS%2FiWmnORXJJt2cHR14e0I9hpk1LYvmAJEhfjxAQRpEav84GX1HlilpsiWXIkQwtAm8zo1n7ovLQij4PQ2FocJ1iG3tK%2FxE8XmiTYdHMPj5q8AGOqUBCIC0rMnJmmnEC%2B8hnLriox9l9vdoQD9Pej2mebAnSbi2kNiqQYNQXMeWWO%2FShqiDTXV1nzyeRtRfd%2BLuLQteSfyRjcinXAtsz8bH89Ln4wBcdcoa9%2FAPviZsKiEWSKFwmyg%2FtIBeSR2tOFWFa70eU2yXNIeNkTnDu8H0LcAYsoeRC6%2BIr3Y996ffPxbQXMPFH7GjlQX7ZVxDJf35Iu4MmZc%2F6Tg0&X-Amz-Signature=91f3599de88a1b21059d77dc35459372a4614d29a1a2ff5c5c4dbe8fb0a7fcae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
