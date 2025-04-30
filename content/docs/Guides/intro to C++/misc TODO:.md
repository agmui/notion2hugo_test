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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KK5ULQ6%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHDlRGn0dkxr%2FoAwOpOITRo7UyKdbbdsxE2ODqH8pIRlAiEA%2BKatTkOpq8H9sLtqQFumVu2wHNSpLxvvBbNo2DxhqrMqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCarxgbb5CQ2r1qiDCrcAzVbGB1Q1czg%2FKfQfrGlXDZ0MdUpeWHTUMMNv1gjjnw6bvQvN4izcBW0%2BIZIReeCXUY8OAa8ih7nubW1OK5c30LEYXxuBSumF8F4AKcqlPDVF2mBALOcrdvhzN4SzpQRGllUsDD5KN1E9QE3rmhj706IwCf9AyGpg2%2FRGfObVypW1D0as4V16FMVYfYE%2FoVLznq7Te0s8w2c5bGA3n2yaSrIX3CY20IGB5d%2F0kGedfC%2Bl8v5epqEAwaE6Y2F2qyEJ76HZTeahkkTRpCu0GwHzpyMVIuCzJZR3wseN4118Osu0GUNBwxDpAdLdLUfzl1NQA2bAG9wT3Ym0mNZq%2BZ3o3kmxqrbf3kJYzXBwy5vh1c568tZ4mB3KuJvXAeiUJ0rWt8sf7JobWx%2FekE8NnUOXoHndGdlxIeu%2Btaoqa%2BYNtkvwiDNzpw2o8aHywxzbwP6ax0b%2FHTICUdIYSRE6toA4xR1tyAL%2BzPYpdgy0rXCsVH17hegg4dTiCqnmXo%2BNQTdj%2Bj%2FZA%2FL9unTc373FwH2Ae8DEcETm5pDFuYKsRJXTmH%2BRcTSB9LoIiYz%2FJTW3%2FIYAuRQzEpAM3ywPsyMWCZP%2F18%2Fc%2FMkIdDAeo4%2B9Vdh8DhgFU0%2FpdLKFOZnS5NPMNuyx8AGOqUBRvoD02wb7WAxlX2QWRsxcfrYSFnc%2Bq25Ui3kpzUfEi9eNW3jk37pLJgFjzc3wOrCpf%2BZjTrfkEeQkFv5ZTm0uT4TLessRjgOfHveLaG80jJGNkZE9oPXPexhGyAz%2BVo3LwV4k%2BS8GJ29OFt9JyXXEMyhxMzItZj1YE2j5ZW3N1wq0qlr3lJU71vWJxgg28zkWDBpHVB0ZRu1cjrAaBymxsK1QB7X&X-Amz-Signature=47905c1ac84de60131165884fd6b5435a8d106bf3fb4388afad0d7b887fa3ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KK5ULQ6%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHDlRGn0dkxr%2FoAwOpOITRo7UyKdbbdsxE2ODqH8pIRlAiEA%2BKatTkOpq8H9sLtqQFumVu2wHNSpLxvvBbNo2DxhqrMqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCarxgbb5CQ2r1qiDCrcAzVbGB1Q1czg%2FKfQfrGlXDZ0MdUpeWHTUMMNv1gjjnw6bvQvN4izcBW0%2BIZIReeCXUY8OAa8ih7nubW1OK5c30LEYXxuBSumF8F4AKcqlPDVF2mBALOcrdvhzN4SzpQRGllUsDD5KN1E9QE3rmhj706IwCf9AyGpg2%2FRGfObVypW1D0as4V16FMVYfYE%2FoVLznq7Te0s8w2c5bGA3n2yaSrIX3CY20IGB5d%2F0kGedfC%2Bl8v5epqEAwaE6Y2F2qyEJ76HZTeahkkTRpCu0GwHzpyMVIuCzJZR3wseN4118Osu0GUNBwxDpAdLdLUfzl1NQA2bAG9wT3Ym0mNZq%2BZ3o3kmxqrbf3kJYzXBwy5vh1c568tZ4mB3KuJvXAeiUJ0rWt8sf7JobWx%2FekE8NnUOXoHndGdlxIeu%2Btaoqa%2BYNtkvwiDNzpw2o8aHywxzbwP6ax0b%2FHTICUdIYSRE6toA4xR1tyAL%2BzPYpdgy0rXCsVH17hegg4dTiCqnmXo%2BNQTdj%2Bj%2FZA%2FL9unTc373FwH2Ae8DEcETm5pDFuYKsRJXTmH%2BRcTSB9LoIiYz%2FJTW3%2FIYAuRQzEpAM3ywPsyMWCZP%2F18%2Fc%2FMkIdDAeo4%2B9Vdh8DhgFU0%2FpdLKFOZnS5NPMNuyx8AGOqUBRvoD02wb7WAxlX2QWRsxcfrYSFnc%2Bq25Ui3kpzUfEi9eNW3jk37pLJgFjzc3wOrCpf%2BZjTrfkEeQkFv5ZTm0uT4TLessRjgOfHveLaG80jJGNkZE9oPXPexhGyAz%2BVo3LwV4k%2BS8GJ29OFt9JyXXEMyhxMzItZj1YE2j5ZW3N1wq0qlr3lJU71vWJxgg28zkWDBpHVB0ZRu1cjrAaBymxsK1QB7X&X-Amz-Signature=0782889a083eff79d20847934bff69f25e5aa4079f899a3fbe187081b4239140&X-Amz-SignedHeaders=host&x-id=GetObject)

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
