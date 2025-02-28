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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HMGEDKP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCX2RkFgGnCjVix8ZGeX2FhgJnfAZELBv2huYNUnQz8bgIga5MlPppAVzkPKPyvAmk0h8Oc7tE0XE1wnVV%2BGvbwpycqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWq8jCNhijqFVdOFCrcA0%2Bbu3qzAt%2BfKzYnMAb%2Frgpvea5TzCfng4YiHK%2FAhFyouRvB6vTiZ0fYNAjmTd%2BO7epgXuxy0qLe%2FDnybdtFy266RzUqFFY54ubuYIjtGBdiY4JNbUT0la1J8z5Uhh5E3RYbPregX4BOieIan5aKNn4POt2CsUci9LOSwGyJ7kunH%2FeBlz%2Fu3JMb0bW3FxhFwW8yr9XLycmjklXjg2sgesvZZxfFwtn6KzHuxHvyF1sFt%2FHcSq5OAFl69HZGrPAzBjkJYnSqf5KK6a74DOVchKoI44mnu8cDxC5Mex%2BLW9sNDXkDgYAHqfgUs4Mp%2BtbvqDIC1n9D05fM2LLW58gZ3sKoTICs9MnxAUAX%2F%2FJcN1KXKx1apm%2F%2FwbJJE1M9jmeWk%2F1VLl220M1MTLr3T7fkVlqaGUa7O218NaQOlnc3QHVwrkNa57Q2wo%2FuTAeR342cATI%2F6AynGmaz9%2BgvqXQ1vavUK9SonzjDqRSuI1wckq%2BlmYKt6Ry%2BXd38OLHWgW4Zb4IKU%2FsyV5idrwmpcga88DYacVVw9ZK4EYPRFkO0JPCACD%2FcLyxbNpF8bW34hkmGoO7RudCNUJhC9WLiO7jeo%2Bun9s4JwvNPvtp8js8RuUeAwxHtrvMynVGkunSNMLj3g74GOqUBC9hUB6Le2HmJHyfwNDe5G5BlhdhgEby0FS0t8a1IoKNnY%2BQT1ktxrpPZnldVG8QuQ0OJKldt7y6dpj66HRq7C2hdnEVPIgsm8oTsnCyH1rLPDWRSKkeB4WHqc5KetkjuBmtHfNUfF3KKCk8O%2FG1A0B9o54RrF%2Fl9C1%2BmDsNTCgWr58dBTU4luJrp7uCR9NoozeXuB4ECbuNi5bdMtqgvSexzGpmF&X-Amz-Signature=ec9fce050191b988e0dd805963361aaf9aa126922e5b17aee0828fdd388146ef&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HMGEDKP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCX2RkFgGnCjVix8ZGeX2FhgJnfAZELBv2huYNUnQz8bgIga5MlPppAVzkPKPyvAmk0h8Oc7tE0XE1wnVV%2BGvbwpycqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWq8jCNhijqFVdOFCrcA0%2Bbu3qzAt%2BfKzYnMAb%2Frgpvea5TzCfng4YiHK%2FAhFyouRvB6vTiZ0fYNAjmTd%2BO7epgXuxy0qLe%2FDnybdtFy266RzUqFFY54ubuYIjtGBdiY4JNbUT0la1J8z5Uhh5E3RYbPregX4BOieIan5aKNn4POt2CsUci9LOSwGyJ7kunH%2FeBlz%2Fu3JMb0bW3FxhFwW8yr9XLycmjklXjg2sgesvZZxfFwtn6KzHuxHvyF1sFt%2FHcSq5OAFl69HZGrPAzBjkJYnSqf5KK6a74DOVchKoI44mnu8cDxC5Mex%2BLW9sNDXkDgYAHqfgUs4Mp%2BtbvqDIC1n9D05fM2LLW58gZ3sKoTICs9MnxAUAX%2F%2FJcN1KXKx1apm%2F%2FwbJJE1M9jmeWk%2F1VLl220M1MTLr3T7fkVlqaGUa7O218NaQOlnc3QHVwrkNa57Q2wo%2FuTAeR342cATI%2F6AynGmaz9%2BgvqXQ1vavUK9SonzjDqRSuI1wckq%2BlmYKt6Ry%2BXd38OLHWgW4Zb4IKU%2FsyV5idrwmpcga88DYacVVw9ZK4EYPRFkO0JPCACD%2FcLyxbNpF8bW34hkmGoO7RudCNUJhC9WLiO7jeo%2Bun9s4JwvNPvtp8js8RuUeAwxHtrvMynVGkunSNMLj3g74GOqUBC9hUB6Le2HmJHyfwNDe5G5BlhdhgEby0FS0t8a1IoKNnY%2BQT1ktxrpPZnldVG8QuQ0OJKldt7y6dpj66HRq7C2hdnEVPIgsm8oTsnCyH1rLPDWRSKkeB4WHqc5KetkjuBmtHfNUfF3KKCk8O%2FG1A0B9o54RrF%2Fl9C1%2BmDsNTCgWr58dBTU4luJrp7uCR9NoozeXuB4ECbuNi5bdMtqgvSexzGpmF&X-Amz-Signature=615cc1e11449ddb813a7043db1d94271b527bfb3bfc2226556932876a3b66f20&X-Amz-SignedHeaders=host&x-id=GetObject)

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
