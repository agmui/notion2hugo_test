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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5ZQFM4M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAIdXl8zTHlfUaprQiXaCOj2ZRD%2FNxlkhEqRmnZ41qCEAiEA1UyaZ8Py6hoR%2FUL9EjNL%2F4pAIsPqGBlibw%2B3lpvCTxcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ9S1GaxfDHRoGpkgyrcAzGJBahFzkFcYYwHEwHzo744d0GhJKpZEs2IkeHs4quQ8mpg69d6GXx%2FbxURlKZk0WqGAd6S5%2FfquUR2UpUliDjhuWt4kEGWoq9i7ajvIAJh5GHNV%2BVaAIv%2B8ZvBGbDrek1CtR%2F7EBudr8S9B7LGeB4SFgaMVGLQVYi9kA1olYGS7gHiPWL%2FeJyEskBUoU2q5YRGp0Mv4pGrQXWIkKXNqdRJ%2FFHf4rr3WNU7oO9M%2F7TgkxMxSxZu1H0x2jdsydViu2cp3QllCLxVdAr6oTe3sobfDyN%2BUbzYaXZMAUJsdqCfXzIRnq4CnYoI9dS62FrTDyqipTggqbJvM6SXdni2SoDz0jiVxRtCDQeiOIUpBx4sflcRu0hJl62I8AmJaJs%2FXuRQ0KPd%2BQe7KbIMxgiPqG5CzMAoc727hfQV12nf9w1YpBSkNeGZy8wGVOu3TX7I7PPHyOsyTRzV47r0IDWZbd%2BBjrNz%2F80Z%2BefGF%2BX8HcXIOGvoRwLXknuziCOJfZL%2FM4sktt2gPgU18s%2FxMCofTJucbQxUo0PpQTxLHYJKNUtqm22fDP39k55xLFAcq12hAa1n44BvJd3K6BMVgScRB%2BUSBP6E2cS9Wvr8gQbtg7%2Bx9C2zptLCyttcL37UMKDv%2B8QGOqUBgouQg1ClfaqOTLiINkXeXb1Mr8B4AkVgy0SBXi66PjhhHxXgNJO6b9je1my8qJVSm7o4SbaZZD5DDjqSsz0vrBpGJn4Q%2BhtoI3hZ1AqVw%2FpTF1iVbtrvGt6yjSrsb6JVfH%2Fx3WKf5R5i4dxx4HFOnOd38yQJ5WspAs5NyMduHIPRa%2FAbzFaHCMlaKbSOf9Dpv7be4xbXe34sRpszBQkU3YLd3isR&X-Amz-Signature=ee4cfa770c0807b7a8be678bc074867b848132f42af6434b0f1aa89a430eca76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5ZQFM4M%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAIdXl8zTHlfUaprQiXaCOj2ZRD%2FNxlkhEqRmnZ41qCEAiEA1UyaZ8Py6hoR%2FUL9EjNL%2F4pAIsPqGBlibw%2B3lpvCTxcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ9S1GaxfDHRoGpkgyrcAzGJBahFzkFcYYwHEwHzo744d0GhJKpZEs2IkeHs4quQ8mpg69d6GXx%2FbxURlKZk0WqGAd6S5%2FfquUR2UpUliDjhuWt4kEGWoq9i7ajvIAJh5GHNV%2BVaAIv%2B8ZvBGbDrek1CtR%2F7EBudr8S9B7LGeB4SFgaMVGLQVYi9kA1olYGS7gHiPWL%2FeJyEskBUoU2q5YRGp0Mv4pGrQXWIkKXNqdRJ%2FFHf4rr3WNU7oO9M%2F7TgkxMxSxZu1H0x2jdsydViu2cp3QllCLxVdAr6oTe3sobfDyN%2BUbzYaXZMAUJsdqCfXzIRnq4CnYoI9dS62FrTDyqipTggqbJvM6SXdni2SoDz0jiVxRtCDQeiOIUpBx4sflcRu0hJl62I8AmJaJs%2FXuRQ0KPd%2BQe7KbIMxgiPqG5CzMAoc727hfQV12nf9w1YpBSkNeGZy8wGVOu3TX7I7PPHyOsyTRzV47r0IDWZbd%2BBjrNz%2F80Z%2BefGF%2BX8HcXIOGvoRwLXknuziCOJfZL%2FM4sktt2gPgU18s%2FxMCofTJucbQxUo0PpQTxLHYJKNUtqm22fDP39k55xLFAcq12hAa1n44BvJd3K6BMVgScRB%2BUSBP6E2cS9Wvr8gQbtg7%2Bx9C2zptLCyttcL37UMKDv%2B8QGOqUBgouQg1ClfaqOTLiINkXeXb1Mr8B4AkVgy0SBXi66PjhhHxXgNJO6b9je1my8qJVSm7o4SbaZZD5DDjqSsz0vrBpGJn4Q%2BhtoI3hZ1AqVw%2FpTF1iVbtrvGt6yjSrsb6JVfH%2Fx3WKf5R5i4dxx4HFOnOd38yQJ5WspAs5NyMduHIPRa%2FAbzFaHCMlaKbSOf9Dpv7be4xbXe34sRpszBQkU3YLd3isR&X-Amz-Signature=4322b2388e5d675e9d9e31f1f4abfa7a7b15a49b636691e10db4a790dbb14c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
